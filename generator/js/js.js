var tab;
var tabContent;

window.onload = function(){
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabsContent(1);
  
}

function hideTabsContent(a) {
  for (var i=a; i < tabContent.length; i++){
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('whiteborder');
  }
}

document.getElementById("tabs").onclick = function(event){
  var target = event.target;
  if(target.className == "tab"){
    for(var i=0; i < tab.length; i++){
      if(target == tab[i]){
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b){
  if(tabContent[b].classList.contains("hide")){
    hideTabsContent(0);
    tab[b].classList.add("whiteborder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}
function generate(){
  var rtl = document.getElementById("rtl").value;
  var rtr = document.getElementById("rtr").value;
  var rbl = document.getElementById("rbl").value;
  var rbr = document.getElementById("rbr").value;

  var ttl = document.getElementById("ttl");
  var ttr = document.getElementById("ttr");
  var tbl = document.getElementById("tbl");
  var tbr = document.getElementById("tbr");

  ttl.value = rtl;
  ttr.value = rtr;
  tbl.value = rbl;
  tbr.value = rbr;

  var result = document.getElementById("result");
  result.style.borderRadius = rtl+"px "+rtr+"px "+rbr+"px "+rbl+ "px";
    var code = document.getElementById("code");
    code.value = "border-radius: "+result.style.borderRadius+";";
}
function tabRow (){
  var toggle = document.getElementById("toggle").value;
  var toggle_numb = document.getElementById("toggle_numb");
  
  toggle_numb.value = toggle;


var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
  box1.style.order = toggle+" ";


    var codetoggle = document.getElementById("codetoggle");
    codetoggle.value = "order: "+box1.style.order+";"+"\r\n"+"order: "+box2.style.order+"0;";
}

function textShadow(){
  var offsetX = document.getElementById("offsetX").value;
  var offsetY = document.getElementById("offsetY").value;
  var blurRadius = document.getElementById("blurRadius").value;


  var xValue = document.getElementById("xValue");
  var yValue = document.getElementById("yValue");
  var blurValue = document.getElementById("blurValue");


  xValue.value = offsetX;
  yValue.value = offsetY;
  blurValue.value = blurRadius;


  var resultShadow = document.getElementById("resultShadow");
  resultShadow.style.textShadow = offsetX+"px "+offsetY+"px "+blurRadius+"px ";
    var codeShadow = document.getElementById("codeShadow");
    codeShadow.value = "text-shadow: "+resultShadow.style.textShadow+";";
}


var button = document.getElementById('userButton');
button.addEventListener('click', function () {
  //нашли наш контейнер
  var ta = document.getElementById('codeShadow'); 
  //производим его выделение
  var range = document.createRange();
  range.selectNode(ta); 
  window.getSelection().addRange(range); 
 
  //пытаемся скопировать текст в буфер обмена
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy, boss'); 
  } 
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
});
