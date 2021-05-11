import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

// 创建虚拟节点
const my_vnode = h('a', {
  props: {
    href: 'https://www.baidu.com',
    target: '_blank'
  }
}, '百度')
console.log('my_vnode :>> ', my_vnode);

const container = document.getElementById("container");
// 让虚拟节点上树
patch(container, my_vnode)
console.log('container :>> ', container);