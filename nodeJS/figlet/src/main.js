const fig = require('figlet');
const figlet = () => fig.textSync('Frontend Bootcamp', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});
module.exports = figlet;