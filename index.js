// Declaring variables

const container = document.getElementById('github-container');
const container2 = document.getElementById('github-container2');
const container3 = document.getElementById('github-container3');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');


// Add an event listener on form

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Fetch Form submitted, prevented..');
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
            console.log(data);
            renderData(data);
        });
 
}

// Render that data out into the DOM

function renderData(data) {
  const html =  `
    
    <img src="${data.avatar_url}" alt="">
    <h2 class = "fullname">${data.name}</h2>
    <h3 class = "bio">${data.bio}</h3>
    <h3 class = "location">${data.location}</h3>
    <p>
      <a href="http://${data.blog}" target="_blank"><button class="github-link">Visit Website</button></a>
    </p>
    
   
  `;
  container.innerHTML = html;
}


/////////////////////////////////////////// Using XMLHttpRequest() /////////////////////////////////////////

// Handle form submit

// form2.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('XMLHttpRequest Form submitted + prevented..');
//     callApi2(e);
// });

// Get the API query URL dynamically and then send it

// function callApi2(e){
//     const searchQuery2 = document.getElementById('searchQuery2').value.toLowerCase() ;
//     const newEndpoint2 = 'https://api.github.com/users/' + searchQuery2;
//     console.log(newEndpoint2);
//     const request = new XMLHttpRequest();

//     request.open('GET', newEndpoint2);
//     request.onload = () => {
//         const requestData2 = JSON.parse(request.responseText);

//         if(request.status >= 200 && request.status < 400) {
//             renderData2(requestData2);            
//         } else {
//             console.log('meh..');
//         }
//     }
//     request.onerror = () => console.log('error');
//     request.send();
// }

// Render the data out into the DOM

// function renderData2(data){
//     console.log(data);
//     console.log(data.bio);
//     const html = `
//         <h2>${data.login}</h2>
//         <h2>Full Name: ${data.name}</h2>
//         <img src="${data.avatar_url}" alt="">
//         <h3>${data.bio}</h3>
//         <p>
//         Personal website: <a href="http://${data.blog}" target="_blank">${data.blog}</a>
//         </p>
//     `;
//     container2.innerHTML = html;
// }


/////////////////////////////////////////// Using Axios /////////////////////////////////////////

// form3.addEventListener('submit', e =>{
//     e.preventDefault();
//     console.log('Axios form submitted, default prevented');
//     callApi3(e);
// });

// function callApi3(e){
//     const searchQuery3 = document.getElementById('searchQuery3').value.toLowerCase() ;
//     console.log(searchQuery3);
//     const newEndpoint3 = 'https://api.github.com/users/' + searchQuery3;
//     console.log(newEndpoint3);

//     axios.get(newEndpoint3)
//         .then(res => {
//             console.log('axios result =>', res);
//             console.log(res.data);
//             renderData3(res.data);
//         })
//         .catch(err => {
//             console.log('ERROR! =>', err);
            
//         })
// }

// function renderData3(data){
    
//     const html = `
//         <h2>${data.login}</h2>
//         <h2>Full Name: ${data.name}</h2>
//         <img src="${data.avatar_url}" alt="">
//         <h3>${data.bio}</h3>
//         <p>
//         Personal website: <a href="http://${data.blog}" target="_blank">${data.blog}</a>
//         </p>
//     `;
//     container3.innerHTML = html;
// }