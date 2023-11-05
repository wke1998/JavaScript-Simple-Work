function checkPwd() {
    let thePwdObj = document.getElementById("idPwd");
    let thePwdObjVal = thePwdObj.value;
    let sp1 = document.getElementById("idsp1");
    let sp2 = document.getElementById("idsp2");
    let flag1 = false, flag2 = false, flag3 = false;

    sp2.innerHTML = ""//清空sp2內容，避免一直重複顯示

    if (thePwdObjVal == "") {
        sp1.innerHTML = "請輸入密碼";
        sp1.style.color = 'red';
    } else if (thePwdObjVal.length >= 6) {
        sp1.innerHTML = "密碼長度符合要求";
        sp1.style.color = 'green';

        for (let i = 0; i < thePwdObjVal.length; i++) {
            ch = thePwdObjVal.charAt(i).toUpperCase();
            if (ch >= "A" && ch <= "Z")
                flag1 = true;
            else if (ch >= "0" && ch <= "9")
                flag2 = true;
            else if ("!@#$%^&*".includes(ch))//檢查有沒有包含特殊字元
                flag3 = true;
            if (flag1 && flag2 && flag3) break;
        }

        if (flag1 && flag2 && flag3) {
            sp2.innerHTML += "<br>密碼格式正確";
            sp2.style.color = 'green';
        } else {
            sp2.innerHTML += "<br>密碼格式不正確";
            sp2.style.color = 'red';
        }
    } else {
        sp1.innerHTML = "密碼長度必須大於等於6";
        sp1.style.color = 'red';
    }
}
