var xiao = document.querySelector('.smalll');
// console.log(ddd.style);
// var sty=window.getComputedStyle(ddd,null);
// console.log(ddd.style.backgroundPositionX);

var dada = document.querySelector('.bigg');
// console.log(dada.style);
function ru(e) {

    // console.log('clientX'+e.clientX+'clientY'+e.clientY);
    // console.log('offsetX'+e.offsetX+'offsetY'+e.offsetY);
    // console.log(e.offsetX);
    dada.style.backgroundPositionX = -e.offsetX * 0.714 + 'px';
    dada.style.backgroundPositionY = -e.offsetY * 0.714 + 'px';
    //其中 0.714是 大小盒子的比例 应该修改成变量
    dada.style.display = 'block';
}
// Window.getComputedStyle()
// 上面这个 Window.getComputedStyle() 
// 似乎可以通过 JS 获取 html 元素节点的 css样式值
//    console.log(sty.backgroundPositionX,sty.backgroundPositionY);
//    let xx=window.getComputedStyle(ddd,null);
//    ddd.style.backgroundPositionX=xx.backgroundPositionX;
//    console.log(ddd.style.backgroundPositionX);

function chu() {
    dada.style.display = 'none';
}

xiao.addEventListener('mousemove', ru);
xiao.addEventListener('mouseout', chu);