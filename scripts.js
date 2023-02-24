let photoList = new Array();
photoList[0]="url(../public/images/IMG_6073.jpg)";
photoList[1]="url(../public/images/IMG_7010.jpg)";
let autoPlay = document.getElementById("auto_photo");
let x =-1;
let l = photoList.length;

function autoScroll() {
    x++;
    if (x == l) {
        x = 0;
    }
    autoPlay.style.backgroundImage = photoList[x];
    window.setTimeout("autoScroll()",2000);
};

window.setTimeout("autoScroll()",0);