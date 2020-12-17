/*!
 * docsify-online-api-test
 * v1.0.0
 * https://github.com/XingXiaoWu/docsify-online-api-test#readme
 * (c) 2017-2020 xing.wu
 * MIT license
 */
(function() {
    "use strict";
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css_248z = ".docsify-online-api-test-button,.docsify-online-api-test-button span{cursor:pointer;transition:all .25s ease}.docsify-online-api-test-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-online-api-test-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-online-api-test-button:focus,pre:hover .docsify-online-api-test-button{opacity:1}";
    styleInject(css_248z);
    function docsifyOnlineApiTest(hook, vm) {
        var docsifyOnlineApiTestUrl = "";
        hook.doneEach(function() {
            var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            var i18n = {
                buttonText: "Go to online api test website",
                buttonStyle: "",
                spanStyle: "",
                url: "https://hoppscotch.io/cn"
            };
            if (vm.config.onlineApiTest) {
                Object.keys(i18n).forEach(function(key) {
                    var textValue = vm.config.onlineApiTest[key];
                    if (typeof textValue === "string") {
                        i18n[key] = textValue;
                    } else if (_typeof(textValue) === "object") {
                        Object.keys(textValue).some(function(match) {
                            var isMatch = location.href.indexOf(match) > -1;
                            i18n[key] = isMatch ? textValue[match] : i18n[key];
                            return isMatch;
                        });
                    }
                });
            }
            docsifyOnlineApiTestUrl = i18n.url;
            var template = [ '<button class="docsify-online-api-test-button" style="'.concat(i18n.buttonStyle, '">'), '<span class="label" style="'.concat(i18n.spanStyle, '">').concat(i18n.buttonText, "</span>"), "</button>" ].join("");
            targetElms.forEach(function(elm) {
                elm.insertAdjacentHTML("beforeend", template);
            });
        });
        hook.mounted(function() {
            var listenerHost = document.querySelector(".content");
            listenerHost.addEventListener("click", function(event) {
                var isCopyCodeButton = event.target.classList.contains("docsify-online-api-test-button");
                if (isCopyCodeButton) {
                    window.open(docsifyOnlineApiTestUrl);
                }
            });
        });
    }
    window.DocsifyOnlineApiTestPlugin = {
        init: function init() {
            return function(hook, vm) {
                hook.ready(function() {
                    console.warn("[Deprecation] Manually initializing docsify-online-api-test using window.DocsifyOnlineApiTestPlugin.init() is no longer necessary.");
                });
            };
        }
    };
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [ docsifyOnlineApiTest ].concat(window.$docsify.plugins || []);
})();
//# sourceMappingURL=docsify-online-api-test.js.map
