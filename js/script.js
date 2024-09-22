// ..........................................................................................document object model
// let input = document.querySelector("input")
// let button = document.querySelector("button")
// let result = document.querySelector("h1")

// button.addEventListener("click", function () {
//   if (input.value >=18 ) {
//     // console.log("you can marry");
//     result.innerHTML = "you can marry"
//     result.style.color="green"
//     result.style.background="yellow"
//   }
//   else {
//     // console.log("you are child");
//     result.innerHTML = "you are a child"
//     result.style.color="red"
//   }
// })
// ..........................................................................................document object model
let inputone = document.querySelector(".ione")
let inputtwo = document.querySelector(".itwo")
let inputthree = document.querySelector(".ithree")
let button = document.querySelector("button")
let result = document.querySelector("h1")

button.addEventListener("click", function () {
  if (inputone.value >= 18 ) {
    result.innerHTML = "You are adult"
    result.style.color="green"
    result.style.background="yellow"
    if (inputtwo.value == "dhaka") {
      result.innerHTML = "Area match"
      result.style.color = "green"
      result.style.background="yellow"
      if (inputthree.value == "male") {
        // result.innerHTML = "You are male"
        result.innerHTML = "You are the perfect candidate"
        result.style.color = "green"
        result.style.background = "yellow"
      }
      else {
        result.innerHTML = "We need a male candidate, but you are not"
        result.style.color = "red"
        result.style.background = "black"
      }
    }
    else {
      result.innerHTML = "The candidate must live in Dhaka, but you are not"
      result.style.color = "red"
      result.style.background = "black"
    }
  }
  else {
    result.innerHTML = "Age does not match"
    result.style.color = "red"
    result.style.background = "black"
  }
})
// ..........................................................................................document object model