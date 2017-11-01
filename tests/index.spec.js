const babel = require("babel-core");
const searchAndReplaceplugin = require("../lib/index");

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

it("shouldn't replace foo by bar", () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          foo: "bar"
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});

it("should replace hello by hey", () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          foo: "bar",
          hello: "hey"
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});
