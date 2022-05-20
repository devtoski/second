const users=[
  { 
      picture:'joseph',
      name:'Joseph Ike',
      job_title:'Carpenter',
      town:'In Ikeja',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    },
  {
      picture:'Adetola',
      name:'Adetola Fashina',
      job_title:'Mason',
      town:'In Ibadan',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    },
    {
      picture:'Emmanuel',
      name:'Emmanuel Fayemi',
      job_title:'Plumber',
      town:'In Akoka',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    },
    
    {
      picture:'Chisom',
      name:'Chisom Obilor',
      job_title:'Wilder',
      town:'In Magodo',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    },
    {
      picture:'Adunoluwa',
      name:'Adunoluwa Adeyemi',
      job_title:'Architect',
      town:'At Iwo Road',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    },
    {
      picture:'Chidi',
      name:'Chidi Okeke',
      job_title:'Civil Engineer',
      town:'In Somolu',
      job_description:'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
    }       
]
    
let display_user = document.getElementById('user');
let html = ""; 

users.forEach(e => {
  html += `
  <div class="col-sm-4 col-md-6 col-lg-4 px-5">
      <div class='m-5'><img src="./Images/${e.picture}.png" class="img-fluid rounded mx-auto d-block" /></div>
      <h2>${e.name}</h2>
      <h3 class="badge bg-primary round-pill">${e.job_title}</h3>
      <p><span class="badge bg-success round-pill">${e.town}</span></p>
      <p class="text-justify">${e.job_description}</p>
  </div>`

  display_user.innerHTML=html;
})

//Bar Icon Toggler
const toggleButton= document.getElementById('toggle-Button');
const navList= document.getElementById('nav-List');

toggleButton.addEventListener('click', ()=>{
  navList.classList.toggle('show');
})


