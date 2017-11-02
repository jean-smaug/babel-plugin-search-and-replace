module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, state) {
        const opts = state.opts;

        if (Object.keys(opts).length === 0) return;

        state.opts.map(opt => {
          if (typeof opt.search === "object") {
          }
          if (path.node.value === opt.search) {
            path.node.value = opt.replace;
          }
        });
      }
    }
  };
};
