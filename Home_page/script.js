let var1=document.getElementById("addbtn")
let var2=document.getElementsByClassName("blog_modal")

var1.addEventListener("click",()=>{
    var2[0].classList.remove("disp")
})

let var3=document.getElementById("addblog")
let var4=document.getElementsByClassName("blogs")

let var5=document.querySelectorAll(".blog_modal *")
var5[0].addEventListener("click",()=>{
    var2[0].classList.add("disp")
})

var3.addEventListener("click",()=>{

    let imgurl=var5[1].value
    let title=var5[2].value
    let descrip=var5[3].value
    var2[0].classList.add("disp")
    var4[0].innerHTML=var4[0].innerHTML+
    '<div class="box"> <img src="'+imgurl+'"class="picture"/> <p class="text" id="blog_title">'+title+'</p> <p id="blog_desc" class="text">'+descrip+'</p><button id="read">Read</button></div>'
})



