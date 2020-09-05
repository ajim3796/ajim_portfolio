export { default as Item } from '../..\\components\\Item.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyItem = import('../..\\components\\Item.vue' /* webpackChunkName: "components_Item" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
