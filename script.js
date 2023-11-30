//// modalbox
let modal = document.getElementById("myModal");


let btn = document.getElementById("button");

let span = document.getElementsByClassName("close")[0];


btn.addEventListener("click",function() {
  modal.style.display = "block";
})

span.addEventListener('click',function() {
  modal.style.display = "none";
})

window.addEventListener('click',function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarup").style.display = "none";
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.color = "white";
    

  } else {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbarup").style.display = "block";
    document.getElementById("navbar").style.color = "black";
   
  }
}


let mouse = document.getElementById("mouse");

mouse.addEventListener('click',()=>{
 window.scrollTo(0,800)
})



let menu = document.getElementById("menu");
let submenu = document.getElementById("myLinkss");

menu.addEventListener("click",function(){
    
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
})



const boxContainer = document.querySelector(".boxes");
const boxes =[
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png", heading : "Teddy Bear" , price : "$30.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png", heading : "Mega Plush Toy" , price : "$38.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png", heading : "Cute Dog" , price : "$24.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png", heading : "Little Friend" , price : "$28.00 USD"}
]
   
boxes.forEach(item=>{
    boxContainer.innerHTML += ` <div class="box1">
    <div class="box1-img"><img
            src="${item.image}">
    </div>
    <p>${item.heading}</p>
    <div class="box1-p">${item.price}</div>
</div>
    `
})

const boxContainer1 = document.querySelector(".boxess");
const boxes1 =[
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png", heading : "Happy Flower" , price : "$30.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png", heading : "Lift Machine" , price : "$38.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png", heading : "Wooden Camera" , price : "$24.00 USD"},
    { image : "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png", heading : "Little Rabit" , price : "$28.00 USD"}
]
   
boxes1.forEach(item=>{
    boxContainer1.innerHTML += ` <div class="box1">
    <div class="box1-img"><img
            src="${item.image}">
    </div>
    <p>${item.heading}</p>
    <div class="box1-p">${item.price}</div>
</div>
    `
})
