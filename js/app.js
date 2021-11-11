


function changeColor() {
   let btn = document.querySelectorAll('.like');
   for(let index = 0; index < btn.length; index++) {
      let el = btn[index];
      el.addEventListener('click', function(e){
         el.classList.toggle('active');
      })
   }
      
}

changeColor();

//lockScroll = () => {
//   document.body.classList.add('lock');
//}

//   unlockScroll = () => {
//   document.body.classList.remove('lock');
//}

function menuOpen() {
   let  menuBody = document.querySelector('.sidebar');
   let  iconMenu = document.querySelector('.sidebar__logo-min');
   let  overLay = document.querySelector('.overlay');

   let burger = document.querySelector('.icon-menu')
   let headerMenuBody = document.querySelector('.menu__body')

   lockScroll = () => {
      document.body.classList.add('lock');
   }

   burger.addEventListener('click',function(e){
      burger.classList.toggle('active');
      headerMenuBody.classList.toggle('active');
      overLay.classList.toggle('active');
   });
   

   //iconMenu.addEventListener('click', function (e) {
   //iconMenu.classList.add('active');
   //menuBody.classList.add('active');
   //overLay.classList.add('active');
   //lockScroll();

   menuBody.addEventListener('click', function (e) {
      menuBody.classList.add('active');
      overLay.classList.add('active');
      lockScroll();
})
};

menuOpen();


function closeOpen() {
   let  menuBody = document.querySelector('.sidebar');
   let  iconMenu = document.querySelector('.sidebar__logo-min');
   let  overLay = document.querySelector('.overlay');

   let burger = document.querySelector('.icon-menu')
   let headerMenuBody = document.querySelector('.menu__body')
   
      unlockScroll = () => {
         document.body.classList.remove('lock');
      }

      
      
   
      overLay.addEventListener('click', function (e) {
      iconMenu.classList.remove('active');
      menuBody.classList.remove('active');
      overLay.classList.remove('active');

      burger.classList.remove('active');
      headerMenuBody.classList.remove('active');
      unlockScroll();
   })
   };
   
   closeOpen();
