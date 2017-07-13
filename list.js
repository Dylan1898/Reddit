var xmlhttp = new XMLHttpRequest();
var url = "https://www.reddit.com/r/DotA2/.json";
document.addEventListener('DOMContentLoaded', function () {
})
xmlhttp.open("GET", url, false);
xmlhttp.send();
console.log(JSON.parse(xmlhttp.responseText))
var Info = (JSON.parse(xmlhttp.responseText))
var promise = new Promise(function (resolve, reject) {
    var Info = (JSON.parse(xmlhttp.responseText))
    resolve(Info)
})
promise.then(function (Info) {
    var mainTarget = Info.data.children
    for (i = 0; i < mainTarget.length; i++) {
        var target = Info.data.children[i].data.title
        var url = Info.data.children[i].data.url
        // console.log(target)
        var div = document.createElement('div')
        var createA = document.createElement('a')
        document.body.appendChild(div)
        createA.setAttribute('href', 'single.html?url=https://www.reddit.com' + Info.data.children[i].data.permalink);
        var author = Info.data.children[i].data.author
        var By = document.createElement('p')
        By.innerHTML = 'By: ' + author
        createA.innerHTML = target
        div.appendChild(createA)
        div.appendChild(By)
        // console.log(url)
    }
})
console.log(location)