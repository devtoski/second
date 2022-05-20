// Show form
formFunc=()=> {
    var x = document.getElementById("form-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
//Bar Icon Toggler
const toggleButton= document.getElementById('toggle-Button');
const navList= document.getElementById('nav-List');

toggleButton.addEventListener('click', ()=>{
navList.classList.toggle('show');
})

function icon2(){
    var password = document.querySelector('[name=ConfirmPassword]');
    if(password.getAttribute('type')==='password'){
        password.setAttribute('type', 'text');
        document.getElementById('icon2').style.color='black';
    }
    else{
        password.setAttribute('type', 'password');
        document.getElementById('icon2').style.color='red';
    }
}



//   const visibilityBtn=document.getElementById("visibilityBtn")

//   visibilityBtn.addEventListener("click", toggleVisibility)
//   function toggleVisibility() {
//     var passwordImport=document.getElementById("password2")
//     var icon=document.getElementById("icon2")

//     if(passwordImport.type=== "password") {
//         passwordImport.type= "text";
//         icon.classList.toggle("fa-eye-slash")
//     } else{
//       passwordImport.type= "password";
//       icon.classList.toggle("fa-eye")
//     }
//   }
//   // form validation 
//   const username=document.getElementById('username');
//   const email=document.getElementById('email');
//   const form = document.getElementById('form-container');
//   const errorElement = document.getElementById('error');
//   form.addEventListener('submit', (e)=>{
//     let messages=[]
//     if(username.value===null || username.value===null) {
//       messages.push('username is Required')
//     }

//     if(messages.value.length <= 6) {
//       messages.push('Password must be longer than 6 characters')
//     }

//     if(messages > 0) {
//       e.preventDefault()
//       errorElement.innerText = messages.join(', ')
//     }
    
//   })