var arrayImg = new Array();
arrayImg[0] = "image1.jpeg";
arrayImg[1] = "image2.jpeg";
arrayImg[2] = "image3.jpeg";
arrayImg[3] = "image4.jpeg";
arrayImg[4] = "image5.jpeg";
arrayImg[5] = "image6.jpeg";

getRandomImage(arrayImg, "");

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = path + img;
    elementRandom = imgStr
	document.getElementById("random")[0].appendChild(elementRandom);
}
