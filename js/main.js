let login=document.querySelector(".submit")
let num_button=document.querySelectorAll("button")
let rating=document.querySelector(".rating")
let card=document.querySelector(".card")
let card_thank=document.querySelector(".cardthank")
let array=[]



card.style.display= "block";
card_thank.style.display="none";

num_button.forEach((e)=>{
    e.addEventListener("click",()=>{
        array.push(...e.value)
        rating.innerHTML=array.length
    })  
})
login.onclick=()=>{
    card.style.display= "none";
    card_thank.style.display="block";
}


    









