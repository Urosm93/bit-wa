const catsList = ["https://e.snmc.io/lk/f/s/721d53f947d91d3732cdb94ec23d262c/4298043.jpg", "https://vignette.wikia.nocookie.net/villains/images/e/e0/ThomaspureHD.jpg/revision/latest?cb=20170718172147", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png", "http://www.felinest.com/images/cartoon-cats-9.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-DnBjznZC5QagL6Xoh5ERdxYJfmJjmch7vM82_abLLxuE1WT"];

const mouseList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI_3FPrl-CI7IKeT4_xVP2yVx8e3asquAcRzcCrr9-qoZNWlQSg", "https://i.gifer.com/KQs.gif",
"https://media1.tenor.com/images/3abac7fc715dbfde84fc1fa539313a9a/tenor.gif?itemid=8011360", "https://vignette.wikia.nocookie.net/originallylooneytunes/images/a/ad/Newspeedyclip-1-.gif/revision/latest?cb=20110420104143"];

export const displayCats = () =>{
    const $container = $(".container");
    const $content = $(`<div><img src=${catsList[parseInt(Math.random()*4)]}><button class="mouse">get mouse photo</button></div>`);
    $container.html($content);
}
export const displayMouse = () =>{
    const $container = $(".container");
    const $content = $(`<div><img src=${mouseList[parseInt(Math.random()*4)]}><button class="cat">get cat photo</button></div>`);
    $container.html($content);
}

