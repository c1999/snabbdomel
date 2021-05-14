import h from "./mysnabbdom/h.js";

import patch from "./mysnabbdom/patch.js"
// const vnode = h('div', {}, [
//     h('a', {}, '测试'),
//     h('a', {}, '测试2'),
//     h('a', {}, [
//         h('a', {}, '测试3')
//     ]),
// ]);
const vnode = h('h1', {}, '你好')
const container = document.getElementById('container')
patch(container, vnode)
