var Post = require("./entities.js"),
    loremIpsum = require('lorem-ipsum'),
    title = loremIpsum(),
    paragraph = loremIpsum();



const makePost = () => {
    let listOfPost = [];
    for (let i = 0; i < 10; i++) {
        title = loremIpsum({
            count: 3                      // Number of words, sentences, or paragraphs to generate.
            , units: 'words'            // Generate words, sentences, or paragraphs.
        });
        paragraph = loremIpsum({
            count: 2                      // Number of words, sentences, or paragraphs to generate.
            , units: 'sentences'            // Generate words, sentences, or paragraphs.

        });
        let post = new Post(title, paragraph);
        listOfPost.push(post);
    }
    return listOfPost;
}
const listOfPost = makePost();
console.log(listOfPost)
module.exports = listOfPost;
