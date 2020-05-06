fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/gallery.json")
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        drawImages(data)
    })
function drawImages(arrayOfImages) {
    for (let i = 0; i < arrayOfImages.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "container");
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var divMd = document.createElement("div");
        divMd.setAttribute("class", "col-lg-5")
        var imageProperty = document.createElement("img");
        imageProperty.setAttribute("src", arrayOfImages[i].image);
        imageProperty.setAttribute("class", "image")
        imageProperty.style.width = "100%";
        middleDiv = document.createElement("div");
        middleDiv.setAttribute("class", "middle");
        textDiv = document.createElement("div");
        textDiv.innerText = arrayOfImages[i].name;
        textDiv.setAttribute("class", "text")


        middleDiv.append(textDiv);
        divMd.append(imageProperty, middleDiv);
        row.append(divMd);
        div.append(row)
        document.body.appendChild(div)
    }

}
drawImages()