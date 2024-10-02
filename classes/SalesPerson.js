const {Employee} = require("./Employee");

class SalesPerson extends Employee{
    #totalSales = 0
    constructor(name, position, salary, isHired, clients =[], totalSales) {
        super(name, position, salary, isHired);
        this.clients = clients;
        this.#totalSales = totalSales;
    }
    getSalesNumber() {
        return this.#totalSales;
    }
    makeSale(amount) {
        this.#totalSales += amount;
    }  
}

module.exports = {
    SalesPerson,
}