export class Calculate{
    constructor(num1,num2,operation){
        this.num1 =num1;
        this.num2= num2;
        this.operation= operation;
    }
 add(){
    return this.num1 + this.num2;
}
  subtract(){
    return this.num1 - this.num2;
}
 multiply(){
    return this.num1 * this.num2;
}
 divide(){
    if (this.num2 === 0) {
        throw console.error("This number can not be divided by zero");
    } else {  
          return this.num1 / this.num2;
        }
}
}