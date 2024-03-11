// alert("js file linked")
document.getElementById("on").onclick = function(){
 document.getElementById("light").src = "https://www.w3schools.com/js/pic_bulbon.gif"   
}
document.getElementById("off").onclick = function(){
 document.getElementById("light").src = "https://www.w3schools.com/js/pic_bulboff.gif"   
}

document.getElementById("as").onclick = function(){
    document.getElementById("heading1").style.color = "blue"
    
}
document.getElementById("heading1").innerHTML = "<span> This is a span</span> "

// document.write("hello!")
document.getElementById("aa").onclick = function () {
    document.write(" <h1> hello </h>")
}


