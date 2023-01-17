var tijiao = document.querySelector('button');



tijiao.onclick = function () {
    var nam = document.querySelector('.nam input');
    var xbie = document.querySelectorAll('.xbie input');
    var nianl = document.querySelector('.nianl input');
    var tizho = document.querySelector('.tizh input');
    var sgao = document.querySelector('.sgao input');
    var techa = document.querySelector('.techa input');
    var mudii= document.querySelectorAll('.biaoshen ul');
    // console.log(mudii.length);

    var xbxb = '男';
    if (xbie[0].checked == true) {
        xbxb = '男';
    } else if (xbie[1].checked == true) {
        xbxb = '女';
    }

    if (mudii.length<14 && nam.value != "" && xbxb != false && nianl.value != ''
        && tizho.value != '' && sgao.value != '' && techa != '') {
        var neww = document.createElement('ul');

        for (let i = 0; i < 6; i++) {
            let lili = document.createElement('li');
            neww.appendChild(lili);
        }

        var shuzu = [nam.value, xbxb, nianl.value,
        tizho.value, sgao.value, techa.value];

        //   console.log(neww.childNodes[2]);
        for (let i = 0; i < 6; i++) {
            neww.childNodes[i].innerHTML = shuzu[i];
        }
        // console.log(neww);
        var mudi = document.querySelector('.biaoshen');
        mudi.appendChild(neww);

    }
    

}