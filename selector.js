

var flag = true
 
function createFrom(){
    btnArr = document.querySelectorAll("button")
  
    //alert(btnArr)
    //btnArr[0].innerText = "Submit " 
    //btnArr[0].style.backgroundColor = "#AF5846"
    btnArr[0].style.color = "White"

    for( i =0 ; i < btnArr.length; i++){
        btnArr[i].innerText = "Submit " 
        btnArr[i].style.backgroundColor = "#AF5846"
        btnArr[i].style.color = "White"
    }
   

    


    //var containerDiv = document.querySelector(".container")
    //containerDiv.style.color = "Red"
    //containerDiv.style.backgroundColor = "Blue"
}

function createFromBlackTheme(){
    btn = document.querySelector("#apply_btn")
    var btntext = btn.innerText 
    if ( btntext == "Login"){
        btn.innerText = "Logout"
        alert("Change from Login to Logout")
    }
    else{
        btn.innerText = "Login"
        alert("Change from Logout to Login")
    }
}


/*
 btnArr = document.querySelectorAll("button")
    btnArr[1].innerText = "Iyad" 
    btnArr[1].style.backgroundColor = "Black"
    btnArr[1].style.color = "White"



*/


function chooseLunch(myHTMLElementOption){
    //alert(myHTMLElementOption.value)
    var myelement  = document.querySelectorAll(".container p")

    alert(myelement[1].innerText)

    var helloparagraph = document.querySelector(".hello_paragraph")
    helloparagraph.innerText = "This is my lunch" + myHTMLElementOption.value
}

