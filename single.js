var search = location.search.substring(1);
var URL=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

console.log(JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
)

// var url = URL
document.addEventListener('DOMContentLoaded', function () {
})
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", URL, false);
xmlhttp.send(); 
console.log(JSON.parse(xmlhttp.responseText))
var Info = (JSON.parse(xmlhttp.responseText))
var promise = new Promise(function (resolve, reject) {
    var Info = (JSON.parse(xmlhttp.responseText))
    resolve(Info)
})
console.log(URL)
// // promise.then(function (Info) {
//     var mainTarget = Info.data.children
//     for (i = 0; i < mainTarget.length; i++) {
//         var target = Info.data.children[i].data.title
//         var url = Info.data.children[i].data.url
//         console.log(target)
//         var div = document.createElement('div')
//         var createA = document.createElement('a')
//         document.body.appendChild(div)
//         createA.setAttribute('href', url);
//         var author = Info.data.children[i].data.author
//         var By = document.createElement('p')
//         By.innerHTML = 'By: ' + author
//         createA.innerHTML = target
//         div.appendChild(createA)
//         div.appendChild(By)
//         console.log(url)
       
//     }
// })
// console.log(location)
