import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({ app }, inject) => {
  const md = new MarkdownIt('default', {"highlight":(str, lang) => {
      const hljs = require("highlight.js");
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            "</code></pre>"
          );
        } catch (__) {}
      }
      // 言語設定がない場合、プレーンテキストとして表示する
      return (
        '<pre class="hljs"><code>' +
        hljs.highlight("plaintext", str, true).value +
        "</code></pre>"
      );
    },"breaks":true,"html":true,"linkify":true,"typographer":true})

  md.use(handlePlugin(require('@iktakahiro/markdown-it-katex')))

  md.use(handlePlugin(require('markdown-it-emoji')))

  md.use(handlePlugin(require('markdown-it-link-attributes')), {"attrs":{"target":"_new","rel":"noopener"}} )

  inject('md', md)
}
