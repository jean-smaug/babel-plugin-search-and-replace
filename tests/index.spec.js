const babel = require("babel-core");
const searchAndReplaceplugin = require("../src/index");

var example = `
var foo = 1;
if (foo) console.log(foo);
const hello = "hello";

const myFunc = function(param = "hello"){
    return 1;
}
`;

it("should replace strings", () => {
  const { code } = babel.transform(example, {
    plugins: [searchAndReplaceplugin]
  });
  expect(code).toMatchSnapshot();
});
