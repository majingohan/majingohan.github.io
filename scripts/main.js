let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tanjiro-sun1.jpg') {
      myImage.setAttribute('src','images/tanjiro- shocked.jpg');
    } else {
      myImage.setAttribute('src','images/tanjiro-sun1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Total Concentration Breathing: ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Total Concentration Breathing: ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }