let image = document.querySelector('img');
let jokediv = document.querySelector('#display-jokes');
let button = document.querySelector('#get-jokes');

button.addEventListener("click", getrandomjokes)

function getrandomjokes(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);

        jokediv.innerHTML = data.value;
        
    })
    .catch((error)=>console.log(error))

}


