module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, state) {
        const opts = state.opts;

        if (Object.keys(opts).length === 0) return;

        state.opts.rules.map(opt => {
          if (
            typeof opt.search === "object" &&
            path.node.value.match(opt.search)
          ) {
            path.node.value = path.node.value.replace(opt.search, opt.replace);
            return;
          }

          if (path.node.value === opt.search) {
            path.node.value = opt.replace;
          }
        });
      }
    }
  };
};
