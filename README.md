# snabbdomel
### 虚拟节点
虚拟节点就是用json描述html
### diff算法
- 虚拟节点和虚拟节点比较
- 同层比较
- 标签和key相同比较
### 核心比较算法
- 新前于旧前
- 新后于旧后
- 新后于旧前  （涉及移动节点，那么新前指向的节点，移动到旧后之后）
- 新前于旧后  （涉及移动节点，那么新前指向的节点，移动到旧前之前）  
命中一种之后就不再进行命中判断，如果都没有就用循环寻找
