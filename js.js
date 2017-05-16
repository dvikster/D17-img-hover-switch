/**
 * Created by StudentGoIT on 16.05.2017.
 */
var menuWrap = document.querySelector('.menu_wrap img');
console.log(menuWrap);

menuWrap.onmousemove = function (event) {
    // console.log(event);
    if(event.clientX <300){
        menuWrap.src = 'img/1ru.png';
        console.log('0-300');
    }
    else if(event.clientX >=300 && event.clientX <=600) {
        menuWrap.src = 'img/2ru.png';
        console.log('300-600');
    }
    else if(event.clientX >600) {
        menuWrap.src = 'img/3ru.png';
        console.log('600-900');
    }
}