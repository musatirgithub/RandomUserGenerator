const myButton = document.querySelector('button');
const inner = document.querySelector('.inner-container');
myButton.addEventListener('click', ()=>{
    async function getData (){
        try {
            let rawPerson = await fetch('https://randomuser.me/api');
            let person = await rawPerson.json();
            userLoader(person);
            
        } catch (error) {
            alert(`The error is : ${error}`);
        }
 //       return person.results[0];
        
    }

    function userLoader(data){
        const {title, first, last} = data.results[0].name;
        const location = data.results[0].location.city;
        const phone = data.results[0].phone;
        const email = data.results[0].email;
        const pic = data.results[0].picture.large;

        inner.querySelector('.image').src = pic;
        inner.querySelector('.name').innerText = first;
        inner.querySelector('.last-name').innerText = last;
        inner.querySelector('.location').innerText = location;
        inner.querySelector('.phone').innerText = phone;
        inner.querySelector('.email').innerText = email;
    }
getData();
})
