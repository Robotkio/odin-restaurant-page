# odin-restaurant-page
Assignment to create a page for a restaurant using recent lessons like Classes, ES6 Modules, npm, and Webpack.

What I Learned

I wanted to experiment and tried creating a larger file structure with a CSS reset, and a different CSS for the menu page imported into that one. I also gave myself "wip" folders to keep things that I didn't want to commit, like the raw images or zip files with font information in them.

I did use a Class on the menu page, though I didn't really need to. Each menu item is a class and the class handles building itself as HTML elements.

I did use import and export but didn't use default at all.

Things I'm Still Messing Up On

- I still can't get pages to scale like I want. I know I have the tools to use CSS functions to scale but it hasn't been the focus so I haven't put too much time into it. You can see this being an issue when changing from the another page to the Menu page. The header takes up less space to fit the new content. Probably good for fitting all on one screen but from a UX standpoint I hate moving a menu around.

- The central column of content I originally wanted to have inside a div. I started getting some weird errors and was doing a bunch of experimenting before realizing I was calling "document.createAttribute("div")" and not "document.createElement("div")" and I gave up fixing the little things.