



function report(){
var name=document.getElementById("name"),
    email=document.getElementById("email"),
    textarea=document.getElementById("textarea");


if(name.value!=""&&email.value!=""&&textarea.value!=""){
    alert("Done Sent Report");
}

else{
    alert("Please Enter Avalied Value In Filde");
}
}



/* Start Payment */


var form = document.getElementById("c"),
    menu= document.getElementById("down-menu"),
    show_menu=document.getElementsByClassName("reg")
    show_pay=document.getElementById("show-pay")
    exit_link=document.getElementById("exit-link")
    ;

$(document).ready(function(){
    $(form).hide();
});


function a(){
$(document).ready(function(){
$(show_pay).click(function(){
   $(form).slideDown(1000);
});
});

};
 function exit(){
 $(exit_link).click(function(){
$(form).slideUp(1000);
 });
 }



var x = document.getElementById("sub-form");
x.onclick = function(){
alert("  ايفون اكس خلصنة اذا تريد اكو صرصور اخذة وجفيني شرك^-^ ");
}


/* End  Payment */