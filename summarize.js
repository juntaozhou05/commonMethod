//babel Ĭ��ֻת���µ� Javascript �䷨������ת���µ� Api ������Generator��Set��Symbol��Promise ��ȫ�ֶ���Ϊ�˽��������⣬����ʹ��һ�ֽ��� Polyfill��������䣬Ҳ�����������Բ����� �ļ���

module.exports = { entry: { app: ['babel-polyfill', './src/main.js'] } }

��̬�ı�title
routes: [ { path: '/index', component: index, meta: { title: '��ҳ' } }, { path: '/about', component: about, meta: { title: '����' } } ]

import router from './router' router.beforeEach((to, from, next) => { let title = to.meta.title; title && (document.title = to.meta.title); next(); })