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

it("should replace nothing", () => {
  const { code } = babel.transform(example, {
    plugins: [searchAndReplaceplugin]
  });
  expect(code).toMatchSnapshot();
});

it("should replace foo by bar", () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          option1: true,
          option2: false
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});
