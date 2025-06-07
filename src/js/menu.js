import "../css/menu-item.css";
export { menu };

const title = document.createElement("div");
title.id = "page-title";
title.classList.add("menu-bg-color");
title.innerText = "Menu";

class MenuItem {
    constructor(title, imageURL, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
    }
    getHTMLItem() {
        const head = document.createElement("h3");
        head.classList.add("menu-item-title");
        head.innerText = this.title;

        const image = document.createElement("img"); 
        image.classList.add("menu-item-image");
        image.src = this.imageURL;
        image.alt = "No image actually linked.";
        
        const desc = document.createElement("p");
        desc.classList.add("menu-item-desc");
        desc.innerText = this.description;

        const item = document.createElement("div");
        item.classList.add("page-content");
        item.appendChild(head);
        item.appendChild(image);
        item.appendChild(desc);

        return item;
    }
}

/*
 *     Menu Items
 */

let items = [];

items[0] = new MenuItem ("Lasagna",
    "",
    "An excellent lasagna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta odit ipsam esse eveniet repudiandae cumque quas suscipit libero molestias."
);
items[1] = new MenuItem ("Carbonara",
    "",
    "Top notch Carbonara. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta odit ipsam esse eveniet repudiandae cumque quas suscipit libero molestias."
);
items[2] = new MenuItem ("Linguine",
    "",
    "Soluta ipsam dolor sed accusamus sunt nemo? Voluptatem debitis veritatis, voluptate consequuntur repellat, sint, cupiditate sed praesentium doloribus deserunt dolores qui?"
);

const p1 = document.createElement("p");
p1.classList.add("page-content");
const lorem01 = "We have great meals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta odit ipsam esse eveniet repudiandae cumque quas suscipit libero molestias. Commodi laudantium quasi a similique labore eveniet necessitatibus aliquid beatae!";
p1.innerText = lorem01;

const menu = [title, p1];
items.forEach(item => menu.push(item.getHTMLItem()));
console.log(menu);