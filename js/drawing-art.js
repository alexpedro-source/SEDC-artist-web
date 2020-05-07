fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/images.json")
    .then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data)

    })

function drewGallery(array) {
    var div =createElement("div");
    div.setAttribute("class","container")
     for (let i = 0; i < array.length; i++) {
        
        var header1 = document.createElement("h3")
        header1.setAttribute("class", "headerTitle");
        header1.innerText=array[i].title;
        var disPara= document.createElement("p");
        disPara.setAttribute("class","discription")
        disPara.innerText=array[i].discription;

     
        div.append(header1,disPara);
    }
    
    document.body.append(div)
}