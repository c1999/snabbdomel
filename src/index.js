import h from "./mysnabbdom/h.js";

import patch from "./mysnabbdom/patch.js"
// const vnode = h('div', {}, [
//     h('a', {}, '测试'),
//     h('a', {}, '测试2'),
//     h('a', {}, [
//         h('a', {}, '测试3')
//     ]),
// ]);
const vnode = h('ul', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
]);
const container = document.getElementById('container')
patch(container, vnode);


const vnode2 = h('ul', {},[
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E'),
    h('li', { key: 'C' }, 'C')
]);
const btn = document.getElementById('btn')
btn.onclick = function () {
    patch(vnode, vnode2)
}