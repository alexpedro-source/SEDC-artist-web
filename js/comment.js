function writeComent(e){
    e.preventDefault();
    var form =e.target;
    var firstName=form.firstname.value;
    var lastName=form.lastname.value;
    var country=form.country.value;
    var email=form.email.value;
    var comment=form.subject.value;


    var filledComent={
        firstname:firstName,
        lastname:lastName,
        country:country,
        email:email,
        comment:comment
    };

    var url ="https://artist-web-goran.firebaseio.com/comments.json";

    fetch(url,{
        method:"POST",
        body:JSON.stringify(filledComent)
    }).then(function(response){
        return response.json();

    }).then(function(data){
        console.log(data )
        setTimeout(function(){window.location="index.html";},3000);
        document.getElementById("fillOnSubmit").innerText="Thank you for your comment!"
    }).catch(function (error){
        console.log(error)
    });
   
}