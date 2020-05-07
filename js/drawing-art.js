fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/images.json")
    .then(function (res) {
        return res.json()
    }).then(function (data) {
       console.log( Object.values(data));
        drawGallery(data);
        var imagesWithSameName=data.filter(function(image){
            return image.name===""
        })


    })
    

function drawGallery(arrayOfArt) {
    
     for (let i = 0; i < arrayOfArt.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "container")
        var header1 = document.createElement("h3")
        header1.setAttribute("class", "headerTitle");
        header1.innerText = arrayOfArt[i].title;
        var disPara = document.createElement("p");
        disPara.setAttribute("class", "discription")
        disPara.innerText = arrayOfArt[i].discription;


        div.append(header1, disPara);
        document.body.append(div)
    }


}
drewGallery();