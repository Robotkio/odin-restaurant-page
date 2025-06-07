export { home };

const title = document.createElement("div");
title.id = "page-title";
title.classList.add("home-bg-color");
title.innerText = "Home";

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

const paragraphs = [p1, p2, p3];
paragraphs.forEach(e => e.classList.add("page-content"));

const lorem01 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta odit ipsam esse eveniet repudiandae cumque quas suscipit libero molestias. Commodi laudantium quasi a similique labore eveniet necessitatibus aliquid beatae!";
const lorem02 = "Nisi vero quidem cumque libero sequi labore facere, neque minima magnam? Non officiis, id esse neque iusto numquam ducimus distinctio quas perspiciatis voluptas accusantium! Perspiciatis alias ipsam consequatur minus voluptate?";
const lorem03 = "Soluta ipsam dolor sed accusamus sunt nemo? Voluptatem debitis veritatis, voluptate consequuntur repellat, sint, cupiditate sed praesentium doloribus deserunt dolores qui? Expedita numquam provident nesciunt eveniet, sunt quaerat ullam distinctio!";

p1.innerText = lorem01;
p2.innerText = lorem02;
p3.innerText = lorem03;

const home = [title, p1, p2, p3];