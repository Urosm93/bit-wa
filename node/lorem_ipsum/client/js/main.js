const url = "http://127.0.0.1:3000/";
const container = document.querySelector(".container");
fetch(url)
.then(res => res.json())
.then(res => {
    res.forEach(element => {
        container.innerHTML += `
        <div class="post">
        <h2>${element.title}</h2>
        <p>${element.paragraph}</p>
        </div>`; 
    });
    
})

