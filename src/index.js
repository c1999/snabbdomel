import h from "./mysnabbdom/h.js";

import patch from "./mysnabbdom/patch.js"
// const vnode = h('div', {}, [
//     h('a', {}, '测试'),
//     h('a', {}, '测试2'),
//     h('a', {}, [
//         h('a', {}, '测试3')
//     ]),
// ]);
const vnode = h('ul', {}, '你好');
const container = document.getElementById('container')
patch(container, vnode);


const vnode2 = h('ul', {},[
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C')
]);
const btn = document.getElementById('btn')
btn.onclick = function () {
    patch(vnode, vnode2)
}