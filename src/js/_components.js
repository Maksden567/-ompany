 const burgerBtn=document.querySelector('.burger__btn')
 const closeBtn=document.querySelector('.close__btn')
 const right=document.querySelector('.header__right')


burgerBtn.addEventListener('click',function(){
   right.style.top="0px"
})
closeBtn.addEventListener('click',function(){
    right.style.top="-100%"
 })