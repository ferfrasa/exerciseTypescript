var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    return Customer;
}());
//let's an instance
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = 'Martin';
myCustomer.lastName = 'dixoon';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
