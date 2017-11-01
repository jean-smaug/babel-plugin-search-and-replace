module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, state) {
        const opts = state.opts;

        if (Object.keys(opts).length === 0) return;

        for (var opt in opts) {
          if (path.node.value === opt) {
            path.node.value = opts[opt];
          }
        }
      }
    }
  };
};
