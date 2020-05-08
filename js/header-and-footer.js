function  setHeader(){
    var header=document.querySelector("header")
    header.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a id="logoOnclick" class="navbar-brand" href="#" onclick="">
            <img src="images/goran logo .png" height="100" width="100" alt="Goran Ristovski">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active" >
                    <a class="nav-link" href="Gallery.html">Gallery</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="About.html">About the Artist </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="Contact.html">Contact</a>
                </li>
         
            </ul>
        </div>
    </nav>
     `



}
function setFooter(){
   var footer=document.querySelector("footer")
   footer.innerHTML=`
   <div class="footer-copyright fixed-bottom text-center py-1">© 2020 Copyright:
   <a> Aleksandar Nanushevski</a>
    </div>
 `
}
setHeader();
setFooter();
document.getElementById("logoOnclick").onclick=function(){
    location.href="index.html"
}