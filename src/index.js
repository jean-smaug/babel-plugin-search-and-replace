module.exports = () => {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === "foo") {
          console.log(path);
          return;
          path.node.name = "bar";
        }
      }
    }
  };
};
