var search = location.search.substring(1).split('=') [1] +'.json';
console.log(search)
// var URL=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
// console.log(JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
// )
document.addEventListener('DOMContentLoaded', function () {
})
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", search, false);
xmlhttp.send(); 
console.log(JSON.parse(xmlhttp.responseText))
var Info = (JSON.parse(xmlhttp.responseText))
var promise = new Promise(function (resolve, reject) {
    var Info = (JSON.parse(xmlhttp.responseText))
    resolve(Info)
})
console.log(Info)
promise.then(function (Info) {
    var mainTarget = Info[0].data
        var target = Info[0].data.children[0]
        var url = Info[0].data.children[0].data.url
        var title= Info[0].data.children[0].data.title
        var content=Info[0].data.children[0].data.selftext
        console.log(target)
        var div = document.createElement('div')
        var addTitle=document.createElement('h1')
        var addContent=document.createElement('h5')
        document.body.appendChild(div)
        var author = Info[0].data.children[0].data.author
        var By = document.createElement('h2')
        By.innerHTML = 'By: ' + author
        addTitle.innerHTML=title
        addContent.innerHTML=content
        div.appendChild(addTitle)
        div.appendChild(By)
        div.appendChild(addContent)
        console.log(url)
        console.log(Info[0].data.children[0])
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(Info[0].data.children[0].data.url)){
            var createA = document.createElement('img')
             createA.setAttribute('src', url)
             div.appendChild(createA)

        }
        // Info[0].data.children[0].data.media.oembed.video
        //     console.log('twitch')
        // }
})
