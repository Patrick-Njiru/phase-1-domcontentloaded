// Your code goes here

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").remove()
    let newP =document.createElement("p")
    newP.innerHTML = 'This is really cool!'
    document.querySelector('body').appendChild(newP) 
})