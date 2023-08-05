

let var1=document.getElementById("addbtn")
let var2=document.getElementsByClassName("blog_modal")

var1.addEventListener("click",()=>{
    var2[0].classList.remove("disp")
    document.getElementById("section1").classList.add("blur")
    document.getElementsByClassName("blogs")[0].classList.add("blur")
})

let var3=document.getElementById("addblog")
let var4=document.getElementsByClassName("blogs")

let var5=document.querySelectorAll(".blog_modal *")

var5[0].addEventListener("click",()=>{
    var2[0].classList.add("disp")
    removeblur()
})

let c=1
var3.addEventListener("click",()=>{

    removeblur()

    let imgurl=var5[1].value
    let title=var5[2].value
    let descrip=var5[3].value
    let blogdata=var5[4].value

    var2[0].classList.add("disp")

    if(!imgurl||!title||!descrip||!blogdata)
    {
        alert("Please specify all the fields")
    }
    else
    {
    var4[0].innerHTML=var4[0].innerHTML+
    '<div class="box"> <img src="'+imgurl+'"class="picture"/> <p class="text" id="blog_title">'+title+'</p> <p id="blog_desc" class="text">'+descrip+'</p><button id="read">Read</button></div>'
    }

       
       let obj=JSON.stringify({"imageurl":imgurl,"BlogTitle":title,"description":descrip,"content":blogdata})

       localStorage.setItem("blog"+c,obj)
       c++

    var5[1].value=""
    var5[2].value=""
    var5[3].value=""
    var5[4].value=""

})
 function removeblur()
 {
    document.getElementById("section1").classList.remove("blur")
    document.getElementsByClassName("blogs")[0].classList.remove("blur")
 }


