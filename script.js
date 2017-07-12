var xmlhttp = new XMLHttpRequest();
var url = "https://www.reddit.com/r/DotA2/.json";
document.addEventListener('DOMContentLoaded', function(){
    console.log('dom')
})
// console.log(xmlhttp)
// xmlhttp.onreadystatechange = function(thing) {
//     if (thing.readyState == 4 && thing.status == 200) {
//         var info=JSON.parse(thing.responseText);
//         // myFunction(myArr);
//     }
// };
xmlhttp.open("GET", url, false);
xmlhttp.send();
console.log (JSON.parse(xmlhttp.responseText))
var Info= (JSON.parse(xmlhttp.responseText))
console.log(Info)

var promise= new Promise(function(resolve, reject){
    var Info= (JSON.parse(xmlhttp.responseText))
    resolve(Info)

}
)

promise.then(function(Info){
    var mainTarget=Info.data.children
    
    console.log(mainTarget)
    for(i=0; i<mainTarget.length; i++){
        var target= Info.data.children[i].data.title
        console.log(target)
    }
})

// thing.json().then(function(sucesss){
//     console.log(sucess)

// })

