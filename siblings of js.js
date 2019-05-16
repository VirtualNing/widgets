class mySibling{
  constructor(selector){
    this.arr = [];
    this.selector = selector.parentElement.children;//这里当前父元素下所有子元素
  }
  siblings(){
    for(var i=0;i<this.selector.length;i++){
      if(this.selector[i].nodeType == 1 && this.selector[i] != this.selector){//当其中任意一个子元素与当前子元素不匹配
        this.arr.push(this.selector[i]);
      }
    }
    return this;
  }
}
