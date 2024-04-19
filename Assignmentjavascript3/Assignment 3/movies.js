// API used in the assignment - https://developer.nytimes.com/docs/articlesearch-product/1/overview
let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let key = "zW7goGlJREI6ux1EvdNw6AO6wPLInsyJ"; 

let button = document.querySelector("button");
let div = document.getElementById("div");
let searchArticle = document.getElementById("search");
let getMovie = button.addEventListener('click', fetchResult);

function fetchResult(event) {
    event.preventDefault();
    let url = `${baseUrl}?q=${searchArticle.value}&api-key=${key}`;
    console.log(url);
    fetch(url)
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            displayResult(json.response.docs);
        });
}

function displayResult(docs) {
    console.log(docs);

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    if (docs.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No Articles Found';
        div.appendChild(para);
    } else {
        for (let i = 0; i < docs.length; i++) {
            let para = document.createElement('p');
            let link = document.createElement('a');
            link.setAttribute('href', docs[i].web_url);
            link.textContent = docs[i].headline.main;
            para.appendChild(link);
            div.appendChild(para);
        }
    }
}
