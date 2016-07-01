window.addEventListener("load",function() {
  setTimeout(function(){
   window.scrollTo(0, 0);
  }

(function click() {
    var loginClick = false;

document.getElementById('login').addEventListener('click', function() {
    if (loginClick === false) {
        document.getElementById('one').style.transform = "translate(-100px, 0px)";
        document.getElementById('two').style.transform = "translate(100px, 0px)";
        document.getElementById('three').style.transform = "translate(0px, 100px)";
        loginClick = true;
    } else {
        document.getElementById('one').style.transform = "translate(0px, 0px)";
        document.getElementById('two').style.transform = "translate(0px, 0px)";
        document.getElementById('three').style.transform = "translate(0px, 0px)";
        loginClick = false;
    }
})

})();

setTimeout(function(){
    document.getElementById('pictureContainer').className += " animated swing";
}, 1500)
