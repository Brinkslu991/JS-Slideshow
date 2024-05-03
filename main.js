let i = 0;

const images = [];

images[0] = "skeloton (1).jpg"
images[1] = "skeloton (3).jpg"
images[2] = "skeloton (4).jpg"
images[3] = "skeloton (6).jpg"

const captions = ['Skeloton Image #1', 'Skeloton Image #2', 'Skeloton Image #3', 'Skeloton Image #4'];

const time = 1000;

function changeImg(){
    document.slide.src = images[i];
    const myCaption = document.querySelector('#Skeloton-caption');
    myCaption.innerHTML = captions[i];

    if (i < images.length - 1){
        i++
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;