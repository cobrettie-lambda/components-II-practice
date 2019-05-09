// STEP 3: Create the new Class
class Link {
    constructor(link) {
        // console.log(link);
        // console.log(this.link.dataset.tab);
        this.link = link;
        this.content = document.querySelector(`.content[data-tab='${this.link.dataset.tab}']`);
        // console.log(this.content);
        this.content = new Content(this.content);
        this.link.addEventListener('click', () => this.linkClick());
    }
    // methods
    linkClick() {
        this.content.toggleContent();
    }
}

class Content {
    constructor(content) {
        this.contentTab = content;
    }
    // methods
    toggleContent() {
        this.contentTab.classList.toggle('change');
    }
}

// STEP 1: Select the DOM elements
const links = document.querySelectorAll('.link');
// console.log(links);

// STEP 2: Use a loop to return the new Class
links.forEach(link => {
    // console.log(link);
    return new Link(link);
});