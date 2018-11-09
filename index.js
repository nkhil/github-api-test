// Declaring variables

const container = document.getElementById('github-container');
const form = document.getElementById('form');

// Add an event listener on form

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted, prevented..');
    callApi(e);
});

// Dynamically set the API URL using the value entered in the input field.

function callApi(e){
    
    console.log('API called');
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase() ;
    const newEndpoint = 'https://api.github.com/users/' + searchQuery;
    fetch(newEndpoint)
        .then(blob => blob.json())
        .then(data => {
            renderData(data);
        });
 
}

// Render that data out into the DOM

function renderData(data) {
  const html =  `
    
    <h2>${data.login}</h2>
    <h2>Full Name: ${data.name}</h2>
    <img src="${data.avatar_url}" alt="">
    <h3>${data.bio}</h3>
    <p>
      Personal website: <a href="http://${data.blog}" target="_blank">${data.blog}</a>
    </p>
    
   
  `;
  container.innerHTML = html;
}



