const random1 = new Promise ((resolve,reject) =>{
    $.ajax("http://thecatapi.com/api/images/get?format=xml&results_per_page=1")
        
    .done((response) => {
        const imgUrl = $(response).find("url").text();
        resolve(imgUrl);
    });
});

const random2 = new Promise ((resolve,reject) =>{
     $.ajax({
         url: `http://thecatapi.com/api/images/get?format=xml&results_per_page=1`,
         method: "GET"
    })
    .done((response) => {
        const imgUrl = $(response).find("url").text();
        resolve(imgUrl);
    });
 });


 const random3 = new Promise ((resolve,reject) =>{
    $.ajax({
        url: `http://thecatapi.com/api/images/get?format=xml&results_per_page=1`,
        method: "GET"
   })
   .done((response) => {
       const imgUrl = $(response).find("url").text();
       resolve(imgUrl);
   });
});

Promise.all([random1, random2, random3])
.then((data)=> {
    const content = $(".images");
    data.forEach(element =>{
        const img = $(`<img src=${element}>`);
            content.append(img);

    })


})