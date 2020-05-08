const urlParameters = new URLSearchParams(location.search)
const name = urlParameters.get("name")

fetch("https://raw.githubusercontent.com/alexpedro-source/SEDC-artist-web/master/data/images.json")
    .then(function (res) {
        return res.json()
    }).then(function (data) {
        const onlyNeededGallery=data.filter(function(gallery){
            return gallery.name==name;
            
        })
       drawImages(onlyNeededGallery);
    })
     function drawImages(image){
        for (let i = 0; i <image.length; i++) {
            var createdDiv= document.createElement("div");
            createdDiv.setAttribute("class","container")
            var imageProperty =document.createElement("img");
            imageProperty.setAttribute("class","resize")
            imageProperty.setAttribute("src",image[i].image)

            createdDiv.append(imageProperty);
            document.body.append(createdDiv)
        }
     }

    
        
            
    
        
     