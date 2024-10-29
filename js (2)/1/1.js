// const i = /\d-\d{3}-\d{3}-\d{4}/;

// const p1 = "+12345678901";
// const p2 = "1-234-567-8901";
// const p3 = "12345678901";

// console.log(i.test(p1));
// console.log(i.test(p2));
// console.log(i.test(p3));


// const i = /\d-?\d{3}-?\d{3}-?\d{4}/;

// const p1 = "+12345678901";
// const p2 = "1-234-567-8901";
// const p3 = "12345678901";

// console.log(i.test(p1));
// console.log(i.test(p2));
// console.log(i.test(p3));


// const i = /\w{8,}/;

// const p1 = "12121212112";
// const p2 = "qwery6";
// const p3 = "password121";

// console.log(i.test(p1));
// console.log(i.test(p2));
// console.log(i.test(p3));




// const gg = "Email: mycomp@gmail.com   Phone: +1-234-223-2323  and  +1-232-232-2323";
// const phone = /\+\d-\d{3}-\d{3}-\d{4}/g;
// let result;
// while ((result = phone.exec(gg)) !==null){
//     console.log("Phone number:", result[0]);
// }




const INPUTS = document.querySelectorAll('input')

const patterns = {
    telephone: /^\d{11}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^.{8,}$/,
    slug: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    username: /^.{4,}$/

};



INPUTS.forEach((input)=>{
    input.addEventListener('keyup', (event) => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.attributes.name.value])
    })
})
function validate(field, regexp){
    if (regexp.test(field.value)){
        field.className = 'valid';
    } 
    else {
        field.className= 'invalid';
    }
}