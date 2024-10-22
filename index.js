let container =document.querySelector(".container");


// for creating the divs and appended it to our html document
for(let i =0; i<50; i++){
 let div = document.createElement("div");
 div.classList.add("color-container")
 container.appendChild(div);
}

// for creating the colors and appending it to our divs

let colorContainerDiv = document.querySelectorAll(".color-container");
console.log(colorContainerDiv);

generateColor();

// create function for generateColor

function generateColor(){
    colorContainerDiv.forEach((ele) =>{
        let newColor = randomColor();
        ele.style.background = '#' + newColor;
        // ele.style.height = "150px";
        // ele.style.width = "150px";
        // ele.style.display = "inline-block";
        // ele.style.margin ="20px";
        ele.innerText = '#' + newColor;
        ele.addEventListener("click", () => {
            copyToClipboard('#' + newColor);

            // Show "Copied!" message temporarily
            let originalText = ele.innerText;
            ele.innerText = "Copied!";
            ele.style.color = "#fff";  // Change text color to white
            setTimeout(() => {
                ele.innerText = originalText;  // Revert back to original color code
                ele.style.color = "#000";  // Revert text color to black
            }, 1000); // Show "Copied!" for 1 second
        });
    });
}

function randomColor(){
    let letter = "0123456789ABCDEF";
    let codeLength = 6;
    let colorCode = "";
    for(let i =0; i<codeLength; i++){
        let randomNumber = Math.floor(Math.random() * letter.length);
        colorCode += letter.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

