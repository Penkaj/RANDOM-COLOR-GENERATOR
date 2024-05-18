

let fun=()=>{
  const rand= Math.floor(Math.random() * 16777215);  //conversion

  const randcode="#"+rand.toString(16);   //conversion to code

  document.body.style.backgroundColor=randcode;

  document.querySelector('#text').innerText=randcode;
}

let button=document.querySelector("#btn");

button.addEventListener('click' , fun);

fun();