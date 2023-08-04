let var1=document.getElementById("addbtn")
let var2=document.getElementsByClassName("blog_modal")

var1.addEventListener("click",()=>{
    var2[0].classList.remove("disp")
})

let var3=document.getElementById("addblog")
let var4=document.getElementsByClassName("blogs")



var3.addEventListener("click",()=>{
    var2[0].classList.add("disp")
    var4[0].innerHTML=var4[0].innerHTML+
    '<div class="box"> <img src= ${img.src} class="picture"/> <p class="text" id="blog_title">Hello this is the blog title and demo blog \</p> <p id="blog_desc" class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p><button id="read">Read</button></div>'
})



