class Employee {
    #salary
    #isHired
    constructor(name, position, salary, isHired =true){
        this.#isHired = isHired
        this.#salary = salary
        this.name = name
        this.position = position
    }
    getSalary(){
        return this.#salary
    }
    setSalary(amount){
        this.#salary = amount
    }
    getStatus(){
        return this.#isHired
    }
    setStatus(command){
        if(command.toLowerCase() === 'hire'){
             this.#isHired = true
        }else if(command.toLowerCase() === 'fire'){
            this.#isHired = false
        }   
    }
}

module.exports = {
    Employee,
}
