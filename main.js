const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "mdn-images.png/firefox-image.png.jpg"){
        myImage.setAttribute("src", "mdn-images.png/firefox2.png.jpg");
    }else{myImage.setAttribute("src", "mdn-images.png/firefox-image.png.jpg");}
};