function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
  }

function changeCircleColor(color){
  const circle=document.querySelector('.circle');
  circle.style.background=color;
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 400);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function showDiv1() {
  document.getElementById('i3').style.display = "block";
  document.getElementById('t1').style.display = "block";
  document.getElementById('t2').style.display = "none";
  document.getElementById('t3').style.display = "none";
  document.getElementById('i1').style.display = "none";
  document.getElementById('i2').style.display = "none";
}
function showDiv2() {
  document.getElementById('i1').style.display = "block";
  document.getElementById('i3').style.display = "none";
  document.getElementById('i2').style.display = "none";
  document.getElementById('t2').style.display = "block";
  document.getElementById('t1').style.display = "none";
  document.getElementById('t3').style.display = "none"; 
}
function showDiv3() {
  document.getElementById('i1').style.display = "none";
  document.getElementById('i3').style.display = "none";
  document.getElementById('i2').style.display = "block";
  document.getElementById('t1').style.display = "none";
  document.getElementById('t2').style.display = "none";
  document.getElementById('t3').style.display = "block";
}
function thongbaopopup() {
  setTimeout(function() {
      document.getElementById("tbpopup-1").classList.toggle("active");
},1000);}

function luan() {
  document.getElementById("tbpopup-1").classList.toggle("active");
}