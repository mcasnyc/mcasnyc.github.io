#### Credits

- Facebook icon by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy)
- Instagram & email icons by [Cole Bemis](https://www.flaticon.com/authors/cole-bemis)
- Twitter icon by [Elegant Themes](https://www.flaticon.com/authors/elegant-themes)


## Editing Instructions

#### Page Names
- Home page is `index.html`; all other pages have a file name matching
the page name (e.g. studio page is `studio.html`)

#### Italics & Bold Text
- `<em>` and `</em>` for italics
- `<strong>` and `</strong>` for bold
  - No spaces before and after text
  - E.g. `<em>italicized text here</em>`

#### Adding a Link
- To add a link - `<a>` tag with `href=''` for the link location
  - e.g. `<a href='https://www.linklocation.com'>Link Text</a>`
  - Optional but recommended: `target='_blank'` for opening in a new tab/window
    - e.g. `<a href='https://www.linklocation.com' target='_blank'>Link Text</a>`

#### Editing Programs Info
- **Program information should always be edited in the `script.js` file**
- Each program "tab" has its own block of code. Each of these blocks have the
  same features/options:
  - A variable name, identified by `var ________ = `
    - You can identify the program you're editing by the variable name -
      e.g. `var workshops = ` is the workshops description!
  - A title - this is what appears in the clickable boxes, as well as at the
    top of the information box when this program is selected. You can identify this
    tag by the `class='description-title'`
  - Description paragraphs - any text you want to be in a given paragraph
    should be in a `div` tag. There are four classes of `div` tags that give
    different styles:
      - `<div class='description-section'>YOUR TEXT HERE</div>` is the basic building
      block for paragraphs. It gives us a new paragraph with a bit of space above and
      below.
      - `<div class='description-class-section'>YOUR TEXT HERE</div>` is a modified version
        of this. It still gives us a new paragraph with space above and below, but less space.
        This is used, for example, within workshop descriptions. A long workshop description
        likely has enough information that you want to break it up into multiple paragraphs.
        By having these paragraphs *within the same workshop description* less spaced out
        it allows them to breathe while still implying they are part of the same section.
      - `<div>YOUR TEXT HERE</div>` gives us a new paragraph with no space added below or above.
        This is useful when we simply want text to appear on the next line.
      - `<div class='description-header'>YOUR TEXT HERE</div>` gives us a way of adding
        a sub-header to a specific paragraph. This is automatically styled in bold.
