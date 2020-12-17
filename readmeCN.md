# docsify-online-api-test
[![NPM](https://img.shields.io/npm/v/docsify-online-api-test.svg?style=flat-square)](https://www.npmjs.com/package/docsify-online-api-test)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/XingXiaoWu/docsify-online-api-test/blob/master/LICENSE)

一个[docsify](https://docsify.js.org)插件，方便你跳转到在线测试网站（默认是postwomen）.

## 安装


在`index.html`中，`docsify`的后面，加一个script标签

```html
<script src="https://unpkg.com/docsify-online-api-test"></script>
```


## 可选项
### buttonText
按钮的文字是可以自定义的：

```javascript
window.$docsify = {
  // docsify-copy-code (defaults)
  onlineApiTest: {
     buttonText: '跳转在线测试网站'
  }
}
```


### 本地化 (l10n)

按钮文字也可以跟随当前的url进行本地化，按顺序处理key/value对象。

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
**Note:** Docsify的[alias](https://docsify.js.org/#/configuration?id=alias)可选项能够非常方便的进行本地化，可以看看[`/demo/`](https://github.com/XingXiaoWu/docsify-online-api-test/tree/master/demo) 示例里面是怎么用的.

### buttonStyle

按钮样式，非常简单就能修改样式，方便与其他插件共存（比如docsify-copy-code）

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

Button里面的span样式
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
跳转的目标url
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

这个项目是在MIT许可证下授权的。有关详细信息，请参阅许可证[LICENSE](https://github.com/XingXiaoWu/docsify-online-api-test/blob/master/LICENSE)。

## 另外
有许多代码参照 [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code). 感谢 [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code).