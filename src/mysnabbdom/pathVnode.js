
import createElement from './createElement'
export default function pathVnode(oldVnode, newVnode) {
    console.log('同一节点');
    // 判断新旧节点是否是一个对象
    if(oldVnode === newVnode) return
    // 判断是否有text属性
    if(newVnode.text !== '' && (newVnode.children == undefined || newVnode.children.length == 0)) {
        if(oldVnode.text !== newVnode.text){
            /**
             * innerText设置或获取标签所包含的文本信息
             * 从标签起始位置到终止位置的内容，去除HTML标签，但不包括自身
             * 所以不管oldVnode是否有子标签都会覆盖成文字
             */
            oldVnode.elm.innerText = newVnode.text
        }
    } else {
         // 在判断oldVnode有没有children
        if(oldVnode.children !== undefined && oldVnode.children.length > 0){ 
            // 此种情况最为复杂，oldVnode和newVnode都有children
        } else {
            // 删除老节点内容
            oldVnode.elm.innerText = '';
            // 遍历children 创建dom 上树
            for (const item of newVnode.children) {
                const dom = createElement(item)
                oldVnode.elm.appendChild(dom)
            }
        }
    }
}