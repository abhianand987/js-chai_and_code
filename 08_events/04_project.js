// generate a random color
const randomIndex = () => {
    return Math.floor(Math.random()*16);
}

const hex = "0123456789ABCDEF";
const randomColor = function(){
    
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){

        color += hex[randomIndex()];

    }
    return color;
}



console.log(randomColor());


let intervalId;

const startChangingColor = function(){
    intervalId = setInterval(function(){
        document.querySelector('body').style.backgroundColor = randomColor();
    } , 1000)
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener
('click' , startChangingColor)

document.querySelector('#stop').addEventListener
    ('click', stopChangingColor);
