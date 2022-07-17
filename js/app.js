const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




const btn__blue = $('.btn__blue');
const btn__org = $('.btn__org');
const btn__red = $('.btn__red');
const tabs = $$('.tab-item');
const moon__color= $('.moon__color');






btn__blue.onclick = function(){
    for (const element of tabs) {
        element.style.color = '#0063EC';
      }
      moon__color.style.color = '#0063EC';
}

btn__org.onclick = function(){
    for (const element of tabs) {
        element.style.color = '#FF9240';
      }
      moon__color.style.color = '#FF9240';
}

btn__red.onclick = function(){
    for (const element of tabs) {
        element.style.color = '#C20000';
      }
      moon__color.style.color = '#C20000';
}






// tabs.forEach((tab,index) => {
//     const pane = tabs[index];

//    tab.onclick = function(){
//        $('.tab-item.active').classList.remove('active');
//        $('.tab-pane.active').classList.remove('active');

//        line.style.left = this.offsetLeft + 'px';
//        line.style.width = this.offsetWidth + 'px';

       
//        pane.classList.add('active');
//        this.classList.add('active');
//    }
   
   
// });