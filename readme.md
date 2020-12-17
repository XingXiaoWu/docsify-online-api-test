# docsify-online-api-test
[![NPM](https://img.shields.io/npm/v/docsify-online-api-test.svg?style=flat-square)](https://www.npmjs.com/package/docsify-online-api-test)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/XingXiaoWu/docsify-online-api-test/blob/master/LICENSE)

A [docsify](https://docsify.js.org) plugin that adds a button go to other website for online api test .

## Installation


Add following script tag to your `index.html` after docsify. 

```html
<script src="https://unpkg.com/docsify-online-api-test"></script>
```


## Options
### buttonText
Button text can be customized as follows:

```javascript
window.$docsify = {
  // docsify-copy-code (defaults)
  onlineApiTest: {
     buttonText: '跳转在线测试网站'
  }
}
```


### Localization (l10n)

Button text can also be customized based on the current URL. Object key/value pairs are processed in the order provided.

```javascript
window.$docsify = {
    onlineApiTest: {
        buttonText: {
            '/zh-cn/': '跳转在线测试网站',
            '/ru/': 'Перейти на онлайн тестовый сайт',
            '/de-de/': 'Zum Online Testing Website',
            '/es/': 'Prueba en línea',
            '/': 'Jump to the online test site'
        },
    }
}
```


**Note:** Docsify's [alias](https://docsify.js.org/#/configuration?id=alias) option makes it easy to manage local content using separate directories. See the [`/demo/`](https://github.com/XingXiaoWu/docsify-online-api-test/tree/master/demo) content in this repo for an example.


### buttonStyle

Button Style, easy to adjust the style, co-exist with other plugins(just like docsify-copy-code)

```
window.$docsify = {
    onlineApiTest: {
        onlineApiTest: {
                buttonStyle: 'color: red;top: 20px;',
            }
    }
}
```

### spanStyle

Button's span Style.
```
window.$docsify = {
    onlineApiTest: {
        onlineApiTest: {
                url: 'color: red;',
            }
    }
}
```

### url
The target address of the jump.
```
window.$docsify = {
    onlineApiTest: {
        onlineApiTest: {
                url: 'https://www.baidu.com',
            }
    }
}
```


## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/XingXiaoWu/docsify-online-api-test/blob/master/LICENSE) for details.

# P.S
There are many references to code form [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code). Thanks for [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code).