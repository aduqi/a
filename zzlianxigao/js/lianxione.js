// window.onload=function() {


// }

// 添加留言
var neirong = document.querySelector('input');
// console.log(neirong.value);
var liuyan = document.querySelector('ul')
var btnn = document.querySelector('button');
btnn.onclick = function dian() {
  var newss = document.createElement('p');
  var shanchu = document.createElement('b');

  liuyan.insertBefore(newss, liuyan.firstElementChild);
  liuyan.insertBefore(shanchu, liuyan.firstElementChild);

  newss.innerHTML = neirong.value;
  shanchu.innerHTML = 'sshanch删除';

  //  shanchu liuyan clear   
  console.log(typeof (liuyan.firstElementChild));
  if (liuyan.firstElementChild !== false) {
    var bbb = document.querySelector('b');
    console.log(bbb);
    bbb.onclick = function () {
      if (bbb.nextSibling) {
        liuyan.removeChild(bbb.nextSibling);
        liuyan.removeChild(bbb)
      }
    }
  }


}

// 删除留言
var clearr = document.querySelector('article .claa');
clearr.onclick = function () {
  var ceshi = document.querySelector('ul');
  ceshi.removeChild(ceshi.firstElementChild);
}

//shanchu liuyan clear
