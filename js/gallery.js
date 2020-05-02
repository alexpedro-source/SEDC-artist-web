function drawGallery(name, imageSrc, imageAlt) {
    divImage = document.createElement("div");
    divImage.className = "container";

    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = imageAlt;
    imageElement.className = "image"

    var middleDiv = document.createElement("div");
    middleDiv.className = ("middle")

    var textDiv = document.createElement("div");
    textDiv.className = ("text");
    textDiv.innerText = name;

    divImage.append(imageElement, middleDiv, textDiv);
    return divImage

}

var allImages;
function getAllImages() {
    fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/gallery.json")
        .then(function (res) {
            return res.json();
        }).then(function (data) {
            

            allImages = Object.keys(data).map(function (key) {
                var newElement = {
                    image: data[key].image,
                    name: data[key].name
                };
                return newElement;

            });
            return drewElementsInGall(allImages);
        }).catch(function (error){
            console.log(error);
        });

}

function drewElementsInGall(arrayOfImages) {
    arrayOfImages.forEach(function (image) {
        var galImage = drawGallery(
            image.image,
            image.name
        );
        document.getElementById("gallery").append(galImage)
    });
}