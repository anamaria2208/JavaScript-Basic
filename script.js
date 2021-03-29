//variables 

const colors = ['red', 'green', 'orange', 'purple', 'blue', 'yellow']
const btn_name = document.querySelector('#name');
const text = document.querySelector('h1');

//init values
document.body.style.backgroundColor = 'yellow';
text.innerHTML = "Color name: yellow"; 


//get color by name
btn_name.addEventListener('click', ()=> {
    let indexNum = Math.floor(Math.random() * (colors.length -1) );
    let randomColor = colors[indexNum];
    document.body.style.backgroundColor = randomColor;
    text.innerHTML = "Color name: " + randomColor;
})



//variables
const btn_hex = document.querySelector('#hex');


//get color by hex code
btn_hex.addEventListener('click', ()=> {
    let hex_number = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + hex_number;
    text.innerHTML = "Color name: #" +  hex_number;

})





