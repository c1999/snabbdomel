/**
 * 
 * @param {*} vnode 需要插入的dom
 */
export default function (vnode) {
    // 创建真实dom
    let domNode = document.createElement(vnode.sel)
    // 有自节点还是有文本
    if(vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)){
        // 内部是文字
        domNode.innerText = vnode.text;
        // 补充elm属性
        vnode.elm = domNode;
    }
    return vnode.elm;
}