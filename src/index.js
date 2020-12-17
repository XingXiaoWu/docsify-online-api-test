import styles from './styles.css';

function docsifyOnlineApiTest(hook, vm) {

    let docsifyOnlineApiTestUrl = "";

    hook.doneEach(function(){
        const targetElms = Array.apply(null, document.querySelectorAll('pre[data-lang]'));
        const i18n = {
            // 按钮文字
            buttonText: 'Go to online api test website',
            // 按钮样式
            buttonStyle: '',
            // 文字样式
            spanStyle:'',
            // 跳转地址
            url: 'https://hoppscotch.io/cn',
        };

        // Update i18n strings based on options and location.href
        if (vm.config.onlineApiTest) {
            Object.keys(i18n).forEach(key => {
                const textValue = vm.config.onlineApiTest[key];

               
                if (typeof textValue === 'string') {
                    i18n[key] = textValue;
                }else if (typeof textValue === 'object') {
                    Object.keys(textValue).some(match => {
                        const isMatch = location.href.indexOf(match) > -1;

                        i18n[key] = isMatch ? textValue[match] : i18n[key];

                        return isMatch;
                    });
                }
            })
        }
        docsifyOnlineApiTestUrl = i18n.url;

        const template = [
            `<button class="docsify-online-api-test-button" style="${i18n.buttonStyle}">`,
            `<span class="label" style="${i18n.spanStyle}">${i18n.buttonText}</span>`,
            '</button>'
        ].join('');

        targetElms.forEach(elm => {
            elm.insertAdjacentHTML('beforeend', template);
        });
    })

    hook.mounted(function() {
        const listenerHost = document.querySelector('.content');
        listenerHost.addEventListener('click', event => {
            const isCopyCodeButton = event.target.classList.contains('docsify-online-api-test-button');
            // 判断按钮是否存在
            if (isCopyCodeButton) {
                // 点击
                window.open(docsifyOnlineApiTestUrl) 
            }
        })
    })
}


window.DocsifyOnlineApiTestPlugin = {
    init: function() {
        return function(hook, vm) {
            hook.ready(function() {
                console.warn('[Deprecation] Manually initializing docsify-online-api-test using window.DocsifyOnlineApiTestPlugin.init() is no longer necessary.');
            });
        };
    }
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyOnlineApiTest].concat(window.$docsify.plugins || []);