/**
 * Created by yys-tt on 2017/4/2.
 */

//定义节点
function Node(data,left,right){
    this.data = data;
    this.left = left;//保存left节点链接
    this.right = right;
    this.show = show;
}
function show(){
    return this.data;//显示保存在节点中的数据
}

//查找最小值
function getMin(){
    var current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}

//查找最大值
function getMax(){
    var current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}

//后序遍历
function postOrder(node){
    if(!node == null){
        postOrder(node.left);
        postOrder(node.right);
        putStr(node.show()+ " ");
    }
}

//使用递归方式实现中序遍历
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);//先访问左子树
        putstr(node.show()+ " ");//再访问根节点
        inOrder(node.right);//最后访问右子树
    }
}

//先序遍历
function preOrder(node){
    if(!node == null){
        putstr(node.show()+ " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}