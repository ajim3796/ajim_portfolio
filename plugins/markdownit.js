import MarkdownIt from "markdown-it";

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    highlight: (str, lang) => {
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
    },
    breaks: true,
    html: true,
    use: ["markdown-it-emoji"]
  });

  const defaultRender =
    md.renderer.rules.link_open ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex("target");
    if (tokens[idx]["attrs"][0][1].match("http")) {
      if (aIndex < 0) {
        tokens[idx].attrPush(["target", "_new"]);
      } else {
        tokens[idx].attrs[aIndex][1] = "_new";
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };

  const emoji = require("markdown-it-emoji");
  md.use(emoji);

  inject("md", md);
};
