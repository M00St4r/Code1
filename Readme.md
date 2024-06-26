# Code1
Documentation 

<div align="right">2024.06.17</div>

Find out what the different software might be used for. 

### Git: 

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. 

### Node.js: 

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. 

### Type Script Compiler: 

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 

### Visual Studio Code: 

Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). 

### ESLint: 

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. 

### Git Graph: 

View a Git Graph of your repository, and easily perform Git actions from the graph. Configurable to look the way you want!

## What did we learn today

### GitHub

- How to create a Git Hub Repository
- How to use markdown do layout files
- How to link files into our markdown files
- How to link your Repository to Visual Studio
- How to add branches
- How to merge branches
- How to gitignore files

#

<div align="right">2024.06.18</div>

### What is the difference between the merge strategies: merge, rebase, squash?
Merge:

    Creates a merge commit that combines changes from one branch into another.
    Retains all individual commits from both branches in the commit history.
    Provides clear information about the branch history.
    Useful for integrating feature branches into the main branch.

Rebase:

    Moves the head of the current branch to the last commit of the target branch.
    Produces a more linear commit history.
    Replays the changes from the feature branch on top of the target branch.
    Useful for keeping a clean, linear history and avoiding unnecessary merge commits.

Squash:

    Combines all commits from a feature branch into a single squashed commit.
    Creates a clean linear history but provides less information about individual commits.
    Useful when you want to simplify the commit history and discard the source branch.


### Temporarily switch to a different commit:

If you want to temporarily go back to a specific commit, use:
git checkout <commit_hash>
Replace <commit_hash> with the actual hash of the commit you want to revert to. This will detach your HEAD, allowing you to explore that commit. If you want to 
make new commits while you’re there, create a new branch using:

    git checkout -b <branch_name> <commit_hash>

To return to your original branch, check it out again.

### Hard delete unpublished commits:

If you want to permanently discard all changes made after a certain commit (and haven’t pushed these changes), use:

    git reset --hard <commit_hash>

Be cautious, as this will remove local modifications. If you have work you want to keep, stash it first:

    git stash

    git reset --hard <commit_hash>

    git stash pop

This saves your modifications, then reapplies them after resetting1.
Replace <commit_hash> with the actual commit hash you want to revert to.

### Remove all untracked files from your Git repository:

#### Simple Cleanup:
Use the following command to delete all untracked files (be cautious, as this action is irreversible):

    git clean -f

This will remove files that are not under version control.

#### Interactive Mode (Safer):
If you want a safer approach, use interactive mode:

    git clean -i

This allows you to review and selectively delete untracked files.

## HTML

Create a clean [HTML Document](/HTML/TagsHTML/main.html)

Edit a Webpage with Browser Dev Tools

![Screenshot](/Files/Images/Screenshot%20Webpage.png)

### HTML Tags

#### Structural Tags:

    <html>: Defines the root of an HTML document.
    <head>: Defines the metadata of an HTML document.
    <body>: Defines the content of an HTML document.
    <h1> to <h6>: Defines HTML headings.
    <p>: Defines a paragraph of text.
    <div>: Defines a division or a section of an HTML document.
    <span>: Defines a section of text within a paragraph.
    <header>: Defines the header section of an HTML document.
    <footer>: Defines the footer section of an HTML document.
    <nav>: Defines a navigation section of an HTML document.
    <main>: Defines the main content section of an HTML document.
    <section>: Defines a section of an HTML document.
    <article>: Defines an independent piece of content within an HTML document.
    <aside>: Defines a piece of content that is related to the main content.
    <figure>: Defines a figure within an HTML document.
    <figcaption>: Defines a caption for a figure.
    <table>: Defines a table within an HTML document.
    <tr>: Defines a table row within a table.
    <td>: Defines a table data cell within a table.
    <th>: Defines a table header cell within a table.

#### Text Tags

    <a>: Defines a hyperlink.
    <abbr>: Defines an abbreviation or an acronym.
    <b>: Defines bold text.
    <i>: Defines italic text.
    <u>: Defines underlined text.
    <strike>: Defines struck-through text.
    <sub>: Defines subscript text.
    <sup>: Defines superscript text.
    <mark>: Defines marked text.
    <q>: Defines a short quotation.
    <blockquote>: Defines a long quotation.
    <cite>: Defines the title of a work.
    <code>: Defines a code snippet.
    <kbd>: Defines a keyboard input.
    <samp>: Defines sample output.
    <var>: Defines a variable.

#### Image Tags

    <img>: Defines an image.
    <picture>: Defines a picture element.
    <source>: Defines a source for an image.
    <map>: Defines a client-side image map.
    <area>: Defines an area within an image map.

#### Link Tags

    <link>: Defines a link to an external resource.
    <a>: Defines a hyperlink.

#### Form Tags

    <form>: Defines a form.
    <input>: Defines an input field.
    <textarea>: Defines a text area.
    <select>: Defines a select menu.
    <option>: Defines an option within a select menu.
    <button>: Defines a button.
    <label>: Defines a label for a form control.
    <fieldset>: Defines a fieldset within a form.
    <legend>: Defines a legend for a fieldset.

#### Table Tags

    <table>: Defines a table.
    <tr>: Defines a table row.
    <td>: Defines a table data cell.
    <th>: Defines a table header cell.
    <thead>: Defines the header section of a table.
    <tbody>: Defines the body section of a table.
    <tfoot>: Defines the footer section of a table.

#### Scripting Tags

    <script>: Defines a script.
    <noscript>: Defines a script that should be executed if the browser does not support scripting.

#### Semantic Tags

    <header>: Defines the header section of an HTML document.
    <footer>: Defines the footer section of an HTML document.
    <nav>: Defines a navigation section of an HTML document.
    <main>: Defines the main content section of an HTML document.
    <section>: Defines a section of an HTML document.
    <article>: Defines an independent piece of content within an HTML document.
    <aside>: Defines a piece of content that is related to the main content.
    <figure>: Defines a figure within an HTML document.
    <figcaption>: Defines a caption for a figure.

#### Deprecated Tags

    <font>: Defines font styles.
    <center>: Centers text or other elements.
    <u>: Defines underlined text.
    <strike>: Defines struck-through text.
    <tt>: Defines teletype text.
    <big>: Defines big text.
    <small>: Defines small text.
    <sub>: Defines subscript text.
    <sup>: Defines superscript text.

#

<div align="right">2024.06.19</div>

## Branchgame

[play](https://matbudimir.github.io/0Sugar/Branchgame/index.html)

## CSS

### [CSS Properties](https://www.w3schools.com/cssref/index.php)

#### Essentials:

    background: A shorthand for background properties like color, image, and position.
    border: A shorthand for border width, style, and color.
    animation: Controls animation properties like duration, timing function, and iteration count.
    font: Sets font properties such as family, size, weight, and style.
    margin and padding: Define spacing around elements.
    color: Specifies text color.
    display: Determines how an element is displayed (e.g., block, inline, flex).
    position: Positions elements (relative, absolute, fixed).
    width, height, and max-width: Control dimensions.
    text-align: Aligns text (left, right, center).

#### What does "cascading" mean?

The term “cascading” in Cascading Style Sheets (CSS) refers to the way styles are applied to HTML elements.

### Comon Selectors in Css

Class Selector: Selects elements with a specific class attribute. For example:

    .intro {
    /* Styles for elements with class="intro" */
    }

ID Selector: Targets an element with a unique ID attribute. For instance:

    #firstname {
    /* Styles for the element with id="firstname" */
    }

Element Selector: Styles all instances of a specific HTML element. For example:

    p {
    /* Styles for all <p> elements */
    }

Descendant Selector: Selects elements within another element. Example:

    div p {
    /* Styles for <p> elements inside <div> elements */
    }

Child Selector: Styles direct children of an element. For instance:


    div > p {
    /* Styles for <p> elements where parent is a <div> */
    }

Attribute Selectors:

    [attribute]: Selects elements with a specific attribute.
    [attribute=value]: Targets elements with a matching attribute value.
    [attribute~=value]: Selects elements with an attribute containing a specific word.
    [attribute|=value]: Matches elements with an attribute value starting with a specific string.
    [attribute^=value]: Styles elements with an attribute value beginning with a specific substring.
    [attribute$=value]: Styles elements with an attribute value ending in a specific substring.
    [attribute*=value]: Selects elements with an attribute containing a specific substring.

Pseudo-classes and Pseudo-elements:

    :hover, :active, :focus: Styles based on user interaction.
    ::before, ::after: Adds content before or after an element.
    :first-child, :last-child: Styles first or last child elements.
    :nth-child(n): Selects elements at a specific position.

<div align="right">2024.06.24</div>

simple Array : []
associative Array : {}

<div align="right">2024.06.25</div>

## Typescript

    document.getElementById("<id>");

    document.getElementById("<id>")!;

<!> guaranties the code that the returned value can't be "null"

    document.querySelector("<css Selector>");

    document.createElement(<element>);

creates a new element in the Html doc.

    let newspan = document.createElement("span");
    newspawn.textContent = "hello";
    document.body.appendChild(newspan);

### Load the Script after the HTML loaded

    <script src='main.js' defer></script>

## Events

Here’s a breakdown of the different types of events and their characteristics:

    Mouse events: These events are triggered by user interactions with the mouse, such as mouse clicks, mouse movements, and mouse wheel scrolling.
    
    Keyboard events: These events are triggered by user interactions with the keyboard, such as key presses, key releases, and keyboard navigation.
    
    Form events: These events are triggered by user interactions with form elements, such as form submissions, input changes, and validation errors.
    
    Window events: These events are triggered by changes to the window, such as window resize, load, and unload.
    
    Document events: These events are triggered by changes to the document, such as DOM mutations, load, and unload.

[All Events]("https://www.w3schools.com/jsref/dom_obj_event.asp")

<div align="right">2024.06.27</div>

## Canvas

shapes and colors

<div align="right">2024.07.01</div>

## Canvas

### Canvas transformations

    
    context.transform(a, b, c, d, e, f)

    a	Scales the drawing horizontally	
    b	Skew the the drawing horizontally	
    c	Skew the the drawing vertically	
    d	Scales the drawing vertically	
    e	Moves the the drawing horizontally	
    f	Moves the the drawing vertically

    ctx.rotate(20 * Math.PI / 180);

    rotates by 20°

    ctx.scale(2, 2);

    skales by 200%

    ctx.translate(70, 70);

    sets position to 70/70

### interfaces

[example](Files/10Interfaces/index.html)

