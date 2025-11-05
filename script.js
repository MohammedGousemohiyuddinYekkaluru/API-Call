const postsListContainer = document.querySelector(".posts-list-container");

//fetching using XHR

function fetchUsingXHR() {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "https://jsonplaceholder.typicode.com/posts");
  XHR.responseType = "json";
  XHR.send();

  XHR.onload = () => {
    if (XHR.status === 200) {
      displayResults(XHR.response);
    } else {
      console.error("Error occured");
    }
  };
}

//fetching using fetch method

function fetchUingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

//fetching using async await

async function fetchUsingAyncAwait(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const result = await response.json();
  displayResults(result);
}

//fetch using XHR and Async Await

function helperMethod(method, url){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject(xhr.response)
            }
        }
    });
    return promise;
}

async function fetchUsingXhrAndAsyncAwait(){
    const response = await helperMethod('GET', 'https://jsonplaceholder.typicode.com/posts');
    displayResults(response);
}

function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) => `
      <div class = 'post-item'>
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
      </div>  
        `
    )
    .join(" ");
}

// fetchUsingXHR();
//fetchUingFetchMethod();
//fetchUsingAyncAwait();
fetchUsingXhrAndAsyncAwait();
