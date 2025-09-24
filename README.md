Simple Calculator Project
This project is a command-line calculator built with Node.js. It allows users to perform basic arithmetic operations addition, subtraction, multiplication, and division directly from their terminal. The calculator is built using modular JavaScript, separating the core calculation logic from the user interface.
Features
 * Basic Arithmetic: Supports add, subtract, multiply, and divide operations.
 * Interactive Interface: Uses readline to prompt the user for input.
 * Input Validation: Handles division by zero and provides a clear error message.
 * Colorful Output: Utilizes the chalk library to display results and errors with distinct colors, improving readability.
 * Modular Design: The calculator logic is contained within a separate module (calculator.js), promoting clean and reusable code.
Prerequisites
Before you begin, ensure you have the following installed on your system:
 * Node.js: The runtime environment for executing JavaScript code.
Installation
 * Clone the repository or download the project files.
 * Navigate to the project directory in your terminal:
   cd your-project-name

 * Install the required dependencies:
   npm install

   This command will install the chalk and readline modules listed in your package.json file.
Usage
To start the calculator, run the main application file from your terminal:
node app.js

Follow the on-screen prompts to enter your numbers and select an operation.
Example
$ node app.js
Registration Number: BD/2025/TC3/028
Please enter the first number: 10
Please enter the second number: 5
Please choose operation (add, subtract, multiply, divide): divide
The quotient is: 2

Project Structure
 * app.js: The main file that handles the user interface, input/output with readline, and calls the calculator methods.
 * calculator.js: Contains the core process class with methods for all arithmetic operations.
 * package.json: Manages project metadata and dependencies.
 * package-lock.json: Records the exact versions of installed packages.                                                    
 * README.md
Author ONUZULIKE CHIJIOKE MARIE CLAIRE
