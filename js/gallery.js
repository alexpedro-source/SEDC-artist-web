fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/gallery.json")
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        drawImages(data)
    })
function drawImages(arrayOfImages) {
    for (let i = 0; i < arrayOfImages.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "container");
    
        var imageProperty = document.createElement("img");
        imageProperty.setAttribute("src", arrayOfImages[i].image);
        imageProperty.setAttribute("class", "image")

        middleDiv = document.createElement("div");
        middleDiv.setAttribute("class", "middle");
        textDiv = document.createElement("div");
        textDiv.innerText = arrayOfImages[i].name;
        textDiv.setAttribute("class", "text")


        middleDiv.append(textDiv);
        
        div.append(imageProperty, middleDiv);
        document.body.appendChild(div)
    }

}
drawImages()