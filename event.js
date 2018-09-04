const basicPanelGrowVal = 1;
const selectPanelGrowVal = 3;

var panels = document.getElementsByClassName("bg");
Array.prototype.forEach.call(panels,function(panel){
  panel.addEventListener("click",function(event){
    var node = event.target;
    //p tag click될 때 p태그의 flexGrow가 변경되어 text 이동하는 현상 방지
    if(event.target.tagName==="P")node = event.target.parentNode;

    var currentGrowVal = Number(node.style.flexGrow);
    if(currentGrowVal === basicPanelGrowVal){
      panelGrowAni(node);
    }else if(currentGrowVal === selectPanelGrowVal){
      panelShrinkAni(node);
    }
  });
});
function panelGrowAni(node){
  var id = setInterval(frame,30);//every 30ms, run frame
  function frame(){
    var currentGrowVal = Number(node.style.flexGrow);
    var currentFontSize = Number(node.style.fontSize.slice(0,node.style.fontSize.indexOf("p")));
    if(currentGrowVal===selectPanelGrowVal){
      clearInterval(id);
    }else{
      currentGrowVal += 0.2;
      currentFontSize += 2;
      node.style.flexGrow = currentGrowVal;
      node.style.fontSize = currentFontSize+"px";
    }
  }
}
function panelShrinkAni(node){
  var id = setInterval(frame,30);
  function frame(){
    var currentGrowVal = Number(node.style.flexGrow);
    var currentFontSize = Number(node.style.fontSize.slice(0,node.style.fontSize.indexOf("p")));
    if(currentGrowVal===basicPanelGrowVal){
      clearInterval(id);
    }else{
      currentGrowVal -=0.2;
      currentFontSize -= 2;
      node.style.flexGrow = currentGrowVal;
      node.style.fontSize = currentFontSize+"px";
    }
  }
}
/*
function howManyPanelGrow(panels){
  var numOfGrowPanel=Array.prototype.reduce.call(panels,function(accum,panel){
    if(panel.target.style.flexGrow!==1){accum += 1;};
    return accum
  },0);
  return numOfGrowPanel;
}
*/
