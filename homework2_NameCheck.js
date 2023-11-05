function checkName() {
    let theName = document.getElementById("idName").value;
    let sp = document.getElementById("idsp1");

    if (theName == "") {
        sp.innerHTML = "請輸入姓名";
        sp.style.color = "red";
    } else if (theName.length < 2) {
        sp.innerHTML = "至少兩個字以上";
        sp.style.color = "red";
    } else if (!/^[\u4e00-\u9fa5]+$/.test(theName)) {//若test為false，代表有非中文字，則用!修改為true
        sp.innerHTML = "必須全部為中文字";
        sp.style.color = "red";
    } else {
        sp.innerHTML = "姓名格式輸入正確";
        sp.style.color = "green";
    }

}