(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function a(){
        console.log("a");
    }

    const aa = a();

    function b(){
        console.log("b");
    }

    function c(){
        let myDate = new Date();

        let year = myDate.getFullYear();
        let month = myDate.getMonth();
        let day = myDate.getDate();

        let hh = myDate.getHours();
        let mm = myDate.getMinutes();
        let ss = myDate.getSeconds();

        document.getElementById("box").innerText = `${year}年${month + 1}月${day}日 ${hh}${mm}${ss}`;
    }

    /**
     * 入口文件
     */


    aa();

    b();

    console.log(c);

    document.getElementById("btn").onclick = c;

    console.log("app.js");

}));
