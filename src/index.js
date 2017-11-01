module.exports = () => {
  return {
    visitor: {
      Identifier(path, state) {
        const opts = state.opts;

        if (Object.keys(opts).length === 0) return;

        for (var opt in opts) {
          if (path.node.name === opt) {
            path.node.name = opts[opt];
          }
          //   if (object.hasOwnProperty(search)) {
          //     var element = object[search];
          //   }
        }
      }
    }
  };
};
