import h from "./mysnabbdom/h.js";

const vnode = h('div', {}, [
    h('a', {}, '测试'),
    h('a', {}, '测试2'),
    h('a', {}, [
        h('a', {}, '测试3')
    ]),
]);
console.log('vnode :>> ', vnode);