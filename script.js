let blob = document.querySelector('.blob');
let direction = ['-',''];


function transform(){
    blob.style.borderRadius = `30px 60px 30px 30px`;
    let result = blob.style.borderRadius = `${randomNumber()}px ${randomNumber()}px ${randomNumber()}px`;

    // blob.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}

function randomNumber(){
    return Math.floor(Math.random()*1500);
}

//Seeing if can use minus values

// function plusMinus(){
//     return direction[Math.floor(Math.random()*direction.length)];
// }

// function randomColor(){
//     return Math.floor(Math.random()*255);
// }

setInterval(transform,500);
