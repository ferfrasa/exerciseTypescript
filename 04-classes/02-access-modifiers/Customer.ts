class Customer{
    
    private _firstName: string;
    private _lastName: string;



 

    constructor(firstName: string,lastName:string){
      this._lastName= lastName;
      this._firstName= firstName
    }

    public get firstName(): string{
      return this._firstName
    }

    public set firstName(value: string){
      this._firstName = value
    }
    public get lastName(): string {
      return this._lastName;
    }
    
    public set lastName(value: string) {
      this._lastName = value;
    }

  
}

//let's an instance

let myCustomer = new Customer("Martin","Dixon");

myCustomer.firstName= 'Martin';
myCustomer.lastName = 'dixoon'

console.log(myCustomer.firstName)
console.log(myCustomer.lastName);

