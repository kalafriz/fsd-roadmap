# Netflix Landing Page Clone | HTML, CSS, JavaScript
### [(view live page)](https://kalafriz.github.io/fsd-roadmap/netflix-landing-clone/index.html)

### About:
Mobile-responsive webpage recreating Netflix's (old) landing page. Static page, uses simple JS to switch between 'tabs' on the landing page. Based on [this tutorial](https://www.youtube.com/watch?v=P7t13SGytRk&ab_channel=TraversyMedia) by Traversy Media.

### Packages:
- **Development:** Live Server, SASS
- **Production:** None

### Notes:
- Significantly deviated from tutorial-recommended CSS grid structure:
  - **Recommended:** Divs are given unique classes in which both grid and type formatting/styles are defined
  - **Changed:** Defined grid classes based on their size, and assigned to divs as necessary. Only unique type formatting handled in div-unique classes.
  - **Improvement:** Simpler code structure, greater reusability, superior for media query reformatting.
