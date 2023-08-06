localStorage.clear()

let var1=document.getElementById("addbtn")
let var2=document.getElementsByClassName("blog_modal")

var1.addEventListener("click",()=>{
    var2[0].classList.remove("disp")
    document.getElementById("section1").classList.add("blur")
    document.getElementsByClassName("blogs")[0].classList.add("blur")
    document.getElementsByClassName("container")[0].classList.add("blur")
})

let var3=document.getElementById("addblog")
let var4=document.getElementsByClassName("blogs")

let var5=document.querySelectorAll(".blog_modal *")

var5[0].addEventListener("mouseenter",()=>{
    var5[0].style.backgroundColor="red"
    document.getElementById("cross").style.color="white"
})
var5[0].addEventListener("mouseleave",()=>{
    var5[0].style.backgroundColor="white"
    document.getElementById("cross").style.color="black"
})

var5[0].addEventListener("click",()=>{
    var2[0].classList.add("disp")
    removeblur()
})

let c=1
var3.addEventListener("click",()=>{
    console.log(var5)

    removeblur()

    let imgurl=var5[2].value
    let title=var5[3].value
    let descrip=var5[4].value
    let blogdata=var5[5].value

    var2[0].classList.add("disp")

    if(!imgurl||!title||!descrip||!blogdata)
    {
        alert("Please specify all the fields")
    }
    else
    {
        
        const regex=new RegExp("^(https?://.*?)(?:\.png|\.jpg|\.jpeg)?$")

        if(regex.test(imgurl))
        {
            var4[0].innerHTML=var4[0].innerHTML+
            '<div class="box" id="blog"'+c+'> <img src="'+imgurl+'"class="picture"/> <div id="innerbox"> <p class="text" id="blog_title">'+title+'</p> <p id="blog_desc" class="text">'+descrip+'</p><button id="read'+c+'"class="read"><a href="/Read_page/index.html?id=blog'+c+'" target=_blank class="link">Read</a></button></div></div>'
        }
        else
        {
            alert("Please enter a valid url for image")
        }

    }

       let obj=JSON.stringify({"imageurl":imgurl,"BlogTitle":title,"description":descrip,"content":blogdata})

       localStorage.setItem("blog"+c,obj)
       c=c+1

    var5[2].value=""
    var5[3].value=""
    var5[4].value=""
    var5[5].value=""
})

 function removeblur()
 {
    document.getElementById("section1").classList.remove("blur")
    document.getElementsByClassName("blogs")[0].classList.remove("blur")
    document.getElementsByClassName("container")[0].classList.remove("blur")
 }

