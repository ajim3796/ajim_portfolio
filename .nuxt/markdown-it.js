import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({ app }, inject) => {
  const md = new MarkdownIt('default', {"html":true,"linkify":true,"breaks":false})

  inject('md', md)
}
