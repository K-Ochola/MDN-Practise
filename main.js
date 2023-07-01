const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "mdn-images.png/firefox-image.png.jpg"){
        myImage.setAttribute("src", "mdn-images.png/firefox2.png.jpg");
    }else{myImage.setAttribute("src", "mdn-images.png/firefox-image.png.jpg");}
};
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")
function setUserName(){
    const myName = prompt("Enter your user name");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool, ${myName}';
}
if (!localStorage.getItem ("name")) {
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool, ${storedName}';
}
