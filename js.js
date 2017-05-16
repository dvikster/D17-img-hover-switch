/**
 * Created by StudentGoIT on 16.05.2017.
 */
var menuWrap = document.querySelector('.menu_wrap img');
// var widthWrap = menuWrap.width;
// console.log(widthWrap);
console.log(menuWrap);

menuWrap.addEventListener('mousemove', hoverMenu);
// menuWrap.onmousemove = function (event) {
function hoverMenu(event) {
    console.log(event);
    var widthWrap = event.toElement.clientWidth;
    var widthPercent = (event.offsetX *100)/widthWrap;
    if(widthPercent <= 2 || widthPercent >= 98){
        menuWrap.src = 'img/0ru.png';
    }
    if(widthPercent >2 && widthPercent <33.3){
        menuWrap.src = 'img/1ru.png';
        console.log(widthPercent);
        menuWrap.onclick = function () {
            location.href = 'http://www.google.com';
            // window.open('http://www.google.com','_blank');
        }
    }
    else if(widthPercent >=33.3 && widthPercent <=66.6) {
        console.log(widthPercent);
        menuWrap.src = 'img/2ru.png';
        menuWrap.onclick = function () {
            location.href = 'http://www.bing.com';
        }
    }
    else if(widthPercent >66.6 && widthPercent <98) {
        console.log(widthPercent);
        menuWrap.src = 'img/3ru.png';
        menuWrap.onclick = function () {
            location.href = 'http://www.gmail.com';
        }
    }
}