## 🚀 Project Name

Figma-Assignment

## ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/HarshidKhunt09/Figma-Assignment.git
```

2. Navigate to the project directory

```
cd Figma-Assignment
```

3. Install dependencies:

```
npm i
```

5. Start the development server:

```
npm start
```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Live Demo

This is live demo links.

| Environment | Link                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| Production  | [https://figma-assignment23.netlify.app/](https://figma-assignment23.netlify.app/)                 |

## 🛠️ Stack

- React Js
- Context
- Router
- Less
- Sentry

## 🌟 Contribution Guidelines

These are the guidelines to be followed while contributing to this codebase.

### Directory Structure

- public - Public assets and HTML template
- src - This is where we make changes. We follow a structured approach where each aspect has its own directory.
  - app - The main entry point of the app, containing all the routes and the app itself.
  - assets - Contains all the assets imported into our application.
    - images - 🖼
  - common - Contains all commonly used constants and functions.
  - components - Contains commonly used reusable components.
  - modules - Contains all the modules of the app.
    - [module-name] - Directory for a specific module.
      - components - Contains all the components of that module.
      - pages - Contains all the pages of that module.
      - [module-name].less - Contains all the styles specific to that module.
  - styles - Globally used styles.

### Basic Rules

- Use a semicolon at the end of every statements.
- DO NOT LEAVE trailing whitespaces at the end of any sentence.
- whitespace must not be used_inside_parantheses but always put spaces around operators, oprands. and after commas.That affects the readability Example:

```
for (let i = 0; i < 10; i++) {} ✅
for(let i=0; i<10; i++){} ❌
```

- Prefer modern ES functions whenever possible.
- Prefer hooks as much as possible.
- ALWAYS use variable with const.
- Limit the use of nested ternary operators to maintain code readability.
- Utilize object and array destructuring to simplify code and make it more readable.
- Prefer using LESS for styling instead of inline styles.
- Use React Fragments (<>...</>) to group multiple elements without adding an extra node to the DOM.
- AVOID Using Index as a Key When Mapping Over Arrays, use unique and stable keys when mapping over arrays to improve rendering performance and avoid potential issues with component reordering.
- When using useEffect hook, make sure to have a cleanup function unless it is not needed.
- Stay updated with React's official documentation, guidelines, and best practices to leverage the latest features and improvements in React development.

### Naming

| Type                   | Case             |
| ---------------------- | ---------------- |
| Variable               | camelCase        |
| Constant               | UPPER_SNAKE_CASE |
| Components | PascalCase       |

## Thanks
