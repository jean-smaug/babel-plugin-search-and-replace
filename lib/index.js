function visitor(path, state) {
  const opts = state.opts;

  if (Object.keys(opts).length === 0) {
    return;
  }

  state.opts.rules.map((opt) => {
    const isRegex = !!(opt.search && typeof opt.search === "object");
    const searchTemplateStrings = !!(opt.searchTemplateStrings);
    const isStringLiteral = path.node.type === "StringLiteral";

    if (isStringLiteral) {
      if (isRegex && path.node.value.match(opt.search)) {
        path.node.value = path.node.value.replace(opt.search, opt.replace);
        return;
      }

      if (path.node.value === opt.search) {
        path.node.value = opt.replace;
      }

      return;
    }

    if (!searchTemplateStrings) {
      return;
    }

    if (isRegex && path.node.value.raw.match(opt.search)) {
      path.node.value.raw = path.node.value.raw.replace(
        opt.search,
        opt.replace
      );
      return;
    }

    if (path.node.value.raw === opt.search) {
      path.node.value.raw = opt.replace;
    }
  });
}

module.exports = () => {
  return {
    visitor: {
      StringLiteral: visitor,
      TemplateElement: visitor,
    },
  };
};
