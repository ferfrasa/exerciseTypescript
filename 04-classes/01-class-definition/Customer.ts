class Customer{
    
    firstName: string;
    lastName: string;

    constructor(firstName: string,lastName:string){
      this.lastName= lastName;
      this.firstName= firstName
    }
}

//let's an instance

let myCustomer = new Customer("Martin","Dixon");

myCustomer.firstName= 'Martin';
myCustomer.lastName = 'dixoon'

console.log(myCustomer.firstName)
console.log(myCustomer.lastName);

