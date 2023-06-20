window.onload = init;

// function init(){
//     // disableSubmit();
// }

function sidebar(){
    let blackScreen = document.querySelector(".Black");
    let sideBar = document.querySelector(".Sidebar");
    blackScreen.style.display = "inline";
    sideBar.style.display = "inline";
    console.log("Opened");
}

function closeMenu(){
    let blackScreen = document.querySelector(".Black");
    let sideBar = document.querySelector(".Sidebar");
    blackScreen.style.display = "none";
    sideBar.style.display = "none";
    console.log("Closed");
}

function disableSubmit(){
    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let submit = document.querySelector("#Submit");

    if(name === "" || email === "" || name === " " || email === " " || name === undefined || email === undefined){
        submit.disabled = true;
    }   
    else {
        submit.disabled = false;
    }
}

function submit(){
    alert("Submitted");
}

