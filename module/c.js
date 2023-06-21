function c(){
    let myDate = new Date();

    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    let day = myDate.getDate();

    let hh = myDate.getHours();
    let mm = myDate.getMinutes();
    let ss = myDate.getSeconds();

    document.getElementById("box").innerText = `${year}年${month + 1}月${day}日 ${hh}:${mm}:${ss}`;
}

export default c;