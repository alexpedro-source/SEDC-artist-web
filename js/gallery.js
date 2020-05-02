function drawGallery(name , imageSrc ,imageAlt){
    divImage= document.createElement("div");
    divImage.className="container";

    var imageElement=document.createElement("img");
    imageElement.src=imageSrc;
    imageElement.alt=imageAlt;
    imageElement.className="image"

    var middleDiv=document.createElement("div");
    middleDiv.className=("middle")
    
    var textDiv=document.createElement("div");
    textDiv.className=("text");
    textDiv.innerText=name;

    divImage.append(imageElement,middleDiv,textDiv);
    return divImage

}