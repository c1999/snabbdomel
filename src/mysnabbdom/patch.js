import vnode from './vnode'
import createElement from './createElement'
import pathVnode from './pathVnode'
export default function (oldVnode, newVnode) {
    // 判断第一个参数是否是真实DMO节点
    if(!oldVnode.sel){
        // 生成虚拟节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    // 判断是否是同一个节点
    if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key){
        pathVnode(oldVnode,newVnode)
    } else{
        //不是同一节点 1删除旧的 2暴力插入新的 
        // 返回真实dom elm
        const newVnodeElm = createElement(newVnode)
        // 上树渲染dom 插入到oldVnode之前
        oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        // 删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}