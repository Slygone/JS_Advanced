// SELECTORS


// Pages
const formPage = document.getElementById('form-page');
const homePage = document.getElementById('home-page');

// Nav Links
const navHome = document.querySelector('#nav-home');
const navForm = document.querySelector('#nav-form');

// BP Elements
const bpContainer = document.getElementById('blog-posts-container');
const loader = document.getElementById('loader');

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let posts = []



// FUNCTIONS

const changeDisplay = (showElements= [], hideElements =[], activateLinks = [], deactivateLinks = []) => {
    hideElements.forEach(el =>el.style.display = 'none')
    showElements.forEach(el =>el.style.display = 'block' )
    deactivateLinks.forEach(li => li.classList.remove('active'))
    activateLinks.forEach(li => li.classList.add('active'))
}



const rednerPosts = () => {
    bpContainer.innerHTML = '';

    posts.forEach(post => {
        bpContainer.innerHTML += `
        <div class="col-sm mt-2" id ="bp-element-${post.id}">
         <div class="card">
           <h5 class="card-header">${post.title}</h5>
           <div class="card-body">
             <p class="card-text">
               ${post.body}
             </p>
           </div>
         </div>
       </div>
    `
    })
}


const getPosts = async () => {
    const response = await fetch(`${baseUrl}/posts`)
    const data = await response.json();
    posts = data.map(bp => new BlogPost(bp.id, bp.userId, bp.title, bp.body))
}

// EVENT HANDLERS

navForm.addEventListener('click', () => {
    changeDisplay([formPage], [homePage], [navForm], [navHome]);
})

navHome.addEventListener('click', () => {
    changeDisplay([homePage], [formPage], [navHome], [navForm]);
})

// MODELS

function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}
// INIT
(async () => {
    changeDisplay([loader,homePage], [formPage], [navHome], [navForm])
    await getPosts();
    changeDisplay([bpContainer], [loader])
    rednerPosts();
})();