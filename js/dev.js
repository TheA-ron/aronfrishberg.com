function college() {
    redirect("resources/collegestatus.html")
}
function github() {
    redirect("https://github.com/TheA-ron/aronfrishberg.com")
}
function regenerate() {
    var random1 = Math.floor(Math.random() * (num_of_pics));
    var random2 = Math.floor(Math.random() * (num_of_signatures));
    document.getElementById("thejewhimself").src="../img/aron/"+random1+".jpg";
    sessionStorage.setItem('picture', random1);
    document.getElementById("signature").src="../img/signatures/"+random2+".png";
    sessionStorage.setItem('signature', random2);
}
function slideshow(time) {
    setInterval(function () {regenerate()}, time);
}
function nuid() {
    console.log("002717334")
    return("002717334")
}