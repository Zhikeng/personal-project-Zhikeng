// photo's autoplay
let photoList = new Array();
photoList[0]="url(../public/images/auto_1.jpeg)";
photoList[1]="url(../public/images/auto_2.jpeg)";
photoList[2]="url(../public/images/auto_3.jpeg)";
photoList[3]="url(../public/images/auto_4.jpeg)";
photoList[4]="url(../public/images/auto_5.jpeg)";
photoList[5]="url(../public/images/auto_6.jpeg)";

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

// date 
let currentDate = new Date();
let currentDatetStr = currentDate.toLocaleDateString();
document.getElementById("current_date").innerHTML = currentDatetStr;
