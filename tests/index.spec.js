const babel = require("@babel/core");
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
          rules: [
            {
              search: "foo",
              replace: "bar"
            }
          ]
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
          rules: [
            {
              search: "foo",
              replace: "bar"
            },
            {
              search: "hello",
              replace: "hey"
            }
          ]
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});

it("should replace el by aze", () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          rules: [
            {
              search: /el/,
              replace: "aze"
            }
          ]
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});


var exampleWithTemplates = `
var foo = 1;
if (foo) console.log(foo);
const bye = \`bye\${foo}\`;

const myFunc = function(param = \`bye\${foo}\`){
    return 1;
}
`;

it("should replace bye for adios", () => {
  const { code } = babel.transform(exampleWithTemplates, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          rules: [
            {
              search: 'bye',
              searchTemplateStrings: true,
              replace: "adios",
            }
          ]
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});

it("should replace ye by aby", () => {
  const { code } = babel.transform(exampleWithTemplates, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          rules: [
            {
              search: /ye/,
              searchTemplateStrings: true,
              replace: "aby",
            }
          ]
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});