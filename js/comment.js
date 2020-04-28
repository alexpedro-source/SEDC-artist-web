function writeComent(e){
    e.peventDefault();
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

    }).catch(function (error){
        console.log(error)
    });

}