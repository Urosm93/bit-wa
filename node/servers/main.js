const url = "http://127.0.0.1:3000/";
const body = document.querySelector('body')
fetch(url)
.then(res => res.json())
.then(res => {
    body.append(res.msg) 
})