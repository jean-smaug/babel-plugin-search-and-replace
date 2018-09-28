# babel-plugin-search-and-replace

## What it does ?

It replace string you choosed during babel runtime


## How to use it ? 

- `yarn add babel-plugin-search-and-replace -DE` or `npm i babel-plugin-search-and-replace --save-dev --exact`

- Add the following lines in your .babelrc

```json
{
    "plugins": [["search-and-replace", {
        rules: [
            {
                "search": "searchedString",
                "replace": "replacement"
            },
            {
                "search": /myRegex/,
                "replace": "replacement"
            }
        ]
    }]]
}
```

For Babel < 7 use babel-plugin-search-and-replace@0.3.0
```json
{
    "plugins": [["search-and-replace", [
        {
            "search": "searchedString",
            "replace": "replacement"
        },
        {
            "search": /myRegex/,
            "replace": "replacement"
        }
    ]]]
}
```

- Enjoy

- And, that's all

- Really that's all ;)