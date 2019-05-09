// STEP 3: Create the new Class
class Link {
    constructor(link) {
        console.log(link);
        this.link = link;
    }
    // methods

}


// STEP 1: Select the DOM elements
const links = document.querySelectorAll('.links');
console.log(links);


// STEP 2: Use a loop to return the new Class
links.forEach(link => {
    // console.log(link);
    return new Link(link);
})