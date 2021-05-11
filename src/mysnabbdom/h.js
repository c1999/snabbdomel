// 手写h函数
import vnode from "./vnode";

/**
 * 支持的参数类型
 * div {} 文字
 * div {} []
 * div {} h()
 */
export default function (sel, data, c) {
    if(arguments.length !== 3)throw new Error ('手写的弱一点没有支持函数重载必须要三个参数')
    // 判断第三个参数
    const children = [];
    if(typeof c === 'string' || typeof c === 'Number'){
        return vnode(sel,data,undefined,c,undefined)
    } else if( Array.isArray(c)){
        // 如果是数组类型
        for (const item of c) {
            if(typeof item !== 'object' || !item.sel){
                throw new Error('数组内参数不是h函数或h函数参数错误')
            }
            children.push(item)
        }
        return vnode(sel,data,children,undefined,undefined)
    } else {
        const children = [c]
        return vnode(sel,data,children,undefined,undefined)
    }
}