 const burgerBtn=document.querySelector('.burger__btn')
 const closeBtn=document.querySelector('.close__btn')
 const right=document.querySelector('.header__right')
const btns=document.querySelectorAll(".tabs__item-btn")


btns.forEach(item=>{
   item.addEventListener("click",function(){
      if(item.firstChild.getAttribute("src")==="../img/plus.png"){
               let current=item.getAttribute("data-tab");
     const currentBlock =document.querySelector(current)
     currentBlock.style.height="185px";
     item.firstChild.setAttribute("src","../img/minus.png")
      }
      else{
         let current=item.getAttribute("data-tab");
         const currentBlock =document.querySelector(current)
         currentBlock.style.height="45px";
         item.firstChild.setAttribute("src","../img/plus.png")
      }

     
   }
   )
})




burgerBtn.addEventListener('click',function(){
   right.style.top="0px"
})
closeBtn.addEventListener('click',function(){
    right.style.top="-100%"
 })