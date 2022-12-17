# Introduction

This tutorial covers the basics of ES6 in JavaScript, including:

- `let` and `const` declarations
- Template strings
- Arrow functions
- Rest and spread operators
- Destructuring
- Sets and Maps
- Async/await

In addition to the basics, the tutorial also covers Classes and Modules, as well as some of the basics of DOM manipulation.

# Getting Started

To get started with this tutorial, you will need a code editor and a web browser. Any modern code editor should work, such as Visual Studio Code or Sublime Text. You will also need a web browser to view the results of your code.

The tutorial is divided into several files:

- `ES6.js`: Contains the code for the ES6 features covered in the tutorial
- `modules.js/default.js/imports.js`: Contains the code for the Modules section of the tutorial
- `oop.js`: Contains the code for the Classes and OOP section of the tutorial
- `index.html`: Contains the code for the DOM manipulation section of the tutorial

You can view the results of the code by opening each file in a web browser or by running the code in a code editor with a JavaScript runtime.

# Examples

Here is an example of `let` and `const` declarations in action:

    if (true) {
    let x = 10;
    console.log(x); // 10
    }
    console.log(x); // ReferenceError: x is not defined

    if (true) {
    var y = 10;
    console.log(y); // 10
    }
    console.log(y); // 10

And here is an example of template strings in action:

    const user = "John";
    const age = 30;

    const msg = Hi, my name is ${user} and I am ${age} years old.;
    console.log(msg); // Hi, my name is John and I am 30 years old.

# Documentation

For detailed documentation on the various features covered in this tutorial, please refer to the code in each of the above-mentioned files.

# Contributions

If you have any suggestions or improvements for this tutorial, please feel free to open an issue or submit a pull request on GitHub.

# License

This tutorial is licensed under the MIT License.

# Credits

This tutorial was created using the official documentation for ES6 in JavaScript and various online resources.
