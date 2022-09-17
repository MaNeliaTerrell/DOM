// Create Two Functions -> addChild and redWedding

const addChild = () => {
    const newDiv = document.createElement("newDiv")
    newDiv.textContent = "NewChild"
    starks.appendChild(newDiv)
    // document.querySelector(".starks").appendChild(addChild)

    // console.log(newDiv);
}
const div = document.getElementsByClassName(".starks");
// console.log(div);

const buttonChi = document.querySelector("#add-child")
// console.log(buttonChi);
buttonChi.addEventListener('click', buttonChi) 
const buttonRw = document.querySelector("#red-wedding")
// console.log(buttonRw);

// Attach functions to buttons
buttonRw.addEventListener('click', buttonRw)
// The addChild function creates new div & appends it to the starks div



// The redWedding function removes ALL stark children (loop)
const redWedding = () => {
    while(div.addChild){
        div.addChild.remove()
    }
}

