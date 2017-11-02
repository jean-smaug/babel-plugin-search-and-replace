# babel-plugin-search-and-replace

## What it does ?

It replace string you choosed during babel runtime


## How to use it ? 

- `yarn add babel-plugin-search-and-replace -DE` or `npm i babel-plugin-search-and-replace --save-dev --exact`

- Add the following lines in your .babelrc

```json
{
    "plugins": [["search-and-replace", [
        {
            "search": "foo",
            "replace": "bar",
        }, 
        {
            "search": "searchedString",
            "replace": "replacement"
        }
    ]]]
}
```

- Enjoy

- And, that's all

- Really that's all ;)