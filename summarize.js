//babel 默认只转换新的 Javascript 句法，而不转换新的 Api ，比如Generator、Set、Symbol、Promise 等全局对象，为了解决这个问题，我们使用一种叫做 Polyfill（代码填充，也可译作兼容性补丁） 的技术

module.exports = { entry: { app: ['babel-polyfill', './src/main.js'] } }

动态改变title
routes: [ { path: '/index', component: index, meta: { title: '主页' } }, { path: '/about', component: about, meta: { title: '关于' } } ]

import router from './router' router.beforeEach((to, from, next) => { let title = to.meta.title; title && (document.title = to.meta.title); next(); })