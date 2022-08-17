let requestFilm1 = 'https://swapi.dev/api/films/4/';
let requestFilm2 = 'https://swapi.dev/api/films/5/';
let requestFilm3 = 'https://swapi.dev/api/films/6/';
let requestPeople = 'https://swapi.dev/api/people/13/';
let requestStarships = 'https://swapi.dev/api/starships/63/';

fetch(requestFilm1)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let p = JSON.stringify(data.title);
    document.getElementById('quest-a1').innerHTML = p;
    let b = JSON.stringify(data.episode_id);
    document.getElementById('quest-ep1').innerHTML = b;
  });

fetch(requestFilm2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let p = JSON.stringify(data.title);
    document.getElementById('quest-a2').innerHTML = p;
    let b = JSON.stringify(data.episode_id);
    document.getElementById('quest-ep2').innerHTML = b;
  });

fetch(requestFilm3)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let p = JSON.stringify(data.title);
    document.getElementById('quest-a3').innerHTML = p;
    let b = JSON.stringify(data.episode_id);
    document.getElementById('quest-ep3').innerHTML = b;
    console.log(data)
  });

fetch(requestPeople)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let p = JSON.stringify(data.name);
    document.getElementById('quest-b').innerHTML = p;
  });

fetch(requestStarships)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let p = JSON.stringify(data.model);
    document.getElementById('quest-c').innerHTML = p;
    console.log(data)
  });

/*
  let html = document.getElementById("myP").innerHTML;
  document.getElementById("demo").innerHTML = html;
*/
