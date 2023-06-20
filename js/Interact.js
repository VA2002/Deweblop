window.onload = init;

function init(){
    // disableSubmit();
}

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


// function flip1() {
//     // document.querySelector("#One").style.animation = 'flip 1s';
//     document.querySelector("#One").style.background = 'White';
//     document.querySelector("#One").innerHTML = '<img class = "back" src = "../img/Java.png" height = "95"  width = "95">';    
// }

// function flip2() {
//     document.querySelector("#Two").style.background = 'White';
//     document.querySelector("#Two").innerHTML = '<img class = "back" src = "../img/CPP.png" height = "100"  width = "95">';    
// }

// function flip3() {
//     document.querySelector("#Three").style.background = 'White';
//     document.querySelector("#Three").innerHTML = '<img class = "back" src = "../img/Python.png" height = "105"  width = "95">';    
// }

// function flip4() {
//     document.querySelector("#Four").style.background = 'White';
//     document.querySelector("#Four").innerHTML = '<img class = "back" src = "../img/CPP.png" height = "100"  width = "95">';    
// }

// function flip5() {
//     document.querySelector("#Five").style.background = 'White';
//     document.querySelector("#Five").innerHTML = '<img class = "back" src = "../img/Python.png" height = "105"  width = "95">';    
// }

// function flip8() {
//     // document.querySelector("#Eight").style.animation = 'flip 1s';
//     document.querySelector("#Eight").style.background = 'White';
//     document.querySelector("#Eight").innerHTML = '<img class = "back" src = "../img/Java.png" height = "95"  width = "95">';    
// }