
const random1 = new Promise((resolve, reject) => {
    $.ajax("http://thecatapi.com/api/images/get?format=xml&results_per_page=1")

        .done(res => resolve(res))
        .fail(() => {
            reject("Network problem!")
        })
})

const random2 = new Promise((resolve, reject) => {
    $.ajax({
        url: `http://thecatapi.com/api/images/get?format=xml&results_per_page=1`,
        method: "GET"
    })
        .done(res => resolve(res))

        .fail(() => {
            reject("Network problem!")
        })
})


const random3 = new Promise((resolve, reject) => {
    $.ajax({
        url: `http://thecatapi.com/api/images/get?format=xml&results_per_page=1`,
        method: "GET"
    })
        .done(res => resolve(res))

        .fail(() => {
            reject("Network problem!")
        })
})
const body = $("body");
Promise.all([random1, random2, random3])
    .then((res) => {
        const content = $(".images");
        res.forEach(element => {
            const url = $(element).find("url").text();
            const img = $(`<img class="imgs" src=${url} >`);
            content.append(img);

        })
            
          

    })
    .catch((msg) => console.log(msg))
    .finally(() => body.prepend("<h1>Cats</h1>"));