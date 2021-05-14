import vnode from './vnode'
import createElement from './createElement'
export default function (oldVnode, newVnode) {
    // 判断第一个参数是否是真实DMO节点
    if(!oldVnode.sel){
        // 生成虚拟节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    // 判断是否是同一个节点
    if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key){
        console.log('同一节点');
    } else{
        console.log('不是同一节点');
        // 返回真实dom elm
        const newVnodeElm = createElement(newVnode)
        // 渲染dom
        oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    
}