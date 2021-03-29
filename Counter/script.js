let count = 0
const counter = document.getElementById("counter");
const buttons = document.querySelectorAll('.btn');



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if (style.contains('decrease')){
            count--;
        } else if (style.contains('increase')){
            count++;
        } else{
            count = 0;
        }
        counter.innerHTML = count;


        if (count < 0){
            counter.style.color = 'red'
        } else if (count > 0){
            counter.style.color = 'green'
        } else {
            counter.style.color = 'black'
        }
    })

    
});


