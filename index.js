// Declaring variables

const container = document.getElementById('github-container');
const container2 = document.getElementById('github-container2');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');


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


// Using XMLHttpRequest()
form2.addEventListener('submit', e => {
    e.preventDefault();
    console.log('XMLHttpRequest Form submitted + prevented..');
    callApi2(e);
});

function callApi2(e){
    const searchQuery2 = document.getElementById('searchQuery2').value.toLowerCase() ;
    const newEndpoint2 = 'https://api.github.com/users/' + searchQuery2;
    console.log(newEndpoint2);
    const request = new XMLHttpRequest();

    request.open('GET', newEndpoint2);
    request.onload = () => {
        const requestData2 = JSON.parse(request.responseText);

        if(request.status >= 200 && request.status < 400) {
            renderData2(requestData2);            
        } else {
            console.log('meh..');
        }
    }
    request.onerror = () => console.log('error');
    request.send();
}

function renderData2(data){
    console.log(data);
    console.log(data.bio);
    const html = `
        <h2>${data.login}</h2>
        <h2>Full Name: ${data.name}</h2>
        <img src="${data.avatar_url}" alt="">
        <h3>${data.bio}</h3>
        <p>
        Personal website: <a href="http://${data.blog}" target="_blank">${data.blog}</a>
        </p>
    `;
    container2.innerHTML = html;
}
