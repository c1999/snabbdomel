/**
 * @param {*} vnode 需要插入的dom
 */
export default function createElement(vnode) {
    // 创建真实dom
    let domNode = document.createElement(vnode.sel)
    // 有自节点还是有文本
    if (vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)) {
        console.log('文本节点dom');
        // 内部是文字
        domNode.innerText = vnode.text;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) { // 当children有内容的时候
        for (const item of vnode.children) {
            // 递归创建子Dom并append
            let chDom = createElement(item);
            domNode.appendChild(chDom)
        }
    }
    // 补充elm属性
    vnode.elm = domNode;
    // 返回一个真实dom
    return vnode.elm;
}