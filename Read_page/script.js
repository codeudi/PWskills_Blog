let var1=document.getElementById("title")
let var2=document.getElementById("para")
let var3=document.getElementById("image")
let var4=document.getElementById("blogsdata")

        const urlParams = new URLSearchParams(window.location.search);

        const blogId = urlParams.get('id');

        let data=JSON.parse(localStorage.getItem(blogId))

        var1.innerHTML=data.BlogTitle

        var2.innerHTML=data.description

        var3.src=data.imageurl

        let details=data.content.split('\n').filter(p => p.trim() !== '')

        let fromattedtext=details.map(p => `<p>${p}</p><br>`).join('')
        
        var4.innerHTML=fromattedtext
        













































