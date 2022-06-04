# babel-plugin-search-and-replace

## What it does

It replaces specified string literals

## Install

- `yarn add babel-plugin-search-and-replace`
- `npm i babel-plugin-search-and-replace`
- `pnpm add babel-plugin-search-and-replace`

## How to use it

Add the following lines in your .babelrc.

```json
{
  "plugins": [
    [
      "search-and-replace",
      {
        "rules": [
          {
            "search": "searchedString",
            "searchTemplateStrings": true,
            "replace": "replacement"
          },
          {
            "search": /myRegex/,
            "replace": "replacement"
          }
        ]
      }
    ]
  ]
}
```

If the `search` key is a string it will search exactly this string.
For example with this config

```json
"rules": [{
  "search": "foo",
  "replace": "baz",
}]
```

`str1` will be replaced but not str 2

```
const str1 = "foo"
const str2 = "foo don't match"
```

If you want `str2` to be replaced, use the regex syntax

```json
"rules": [{
  "search": /foo/,
  "replace": "baz",
}]
```

## Babel < 7

For Babel < 7 use babel-plugin-search-and-replace@0.3.0 (does not support template strings)

```json
{
  "plugins": [
    [
      "search-and-replace",
      [
        {
          "search": "searchedString",
          "replace": "replacement"
        },
        {
          "search": /myRegex/,
          "replace": "replacement"
        }
      ]
    ]
  ]
}
```
