//app.js = main file
//importing built in modules
import path from "node:path";
import readline  from "readline";

// importing 3rd party modules
import chalk from "chalk";

// importing custom modules
import {Calculate} from "./calculator.js";
import exponent from "./exponential.js";

//my Registration Number
console.log(chalk.cyan("Registration Number: BD/2025/TC3/028"));

//file path
const filepath ="C:\Users\Onyx\Desktop\chijioke\chijioke-calculator\my_modules/app.js" 
console.log(chalk.green(path.basename(filepath)));

// creating input/output interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(`below is a simple calculator for simple operations`);
   
//requesting for numbers and completing operation
  rl.question("Please enter the first number: ",(num1)=>{
  rl.question("Please enter second number: ", (num2) =>{
  rl.question("please choose operation (add,subtract,multiply,divide) ", (operation) => {
    let resulT;
    const calc =new Calculate(parseFloat(num1),parseFloat(num2));
  
   try{
    if (operation.toLowerCase() ==="add"){
      resulT =chalk.blue(`the sum is: ${calc.add(num1,num2)}`);
      console.log (resulT);
    }else if (operation.toLowerCase() ==="subtract"){
      resulT =chalk.bgRed(`the subtract is: ${calc.subtract(num1,num2)}`);
      console.log (resulT);
    }
    else if (operation.toLowerCase() ==="multiply"){
      resulT =chalk.bgGreen(`the multiplication is: ${calc.multiply(num1,num2)}`);
      console.log (resulT);
    }else if (operation.toLowerCase() ==="divide"){
      resulT =chalk.bgGray(`the division is: ${calc.divide(num1,num2)}`);
      console.log (resulT);
    }else{
        console.log(`This operation is not within the ones mentioned above`);
    }
    }
    catch(error){
        resulT = chalk.red(`Error: ${error.message}`);
    } 

 // this is my second module to print the exponent of numbers
  console.log(chalk.bgBlueBright(`This will print out the exponent of each number you enter `));
rl.question(chalk.green("Please enter the number: "),(num)=>{
  rl.question(chalk.green("Please enter the exponent(power) "),(power) =>{
    console.log (chalk.red`the answer is ${exponent(num,power)}`);
    rl.close();
  });
});
});
});
});