fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/images.json")
.then(function(res){
    return res.json()
}).then (function (data){
    console.log(data)
    
})