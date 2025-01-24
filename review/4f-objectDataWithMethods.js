const user = {
    firstname: 'George',
    lastname: 'Papadopoulos',
    getFirstname: function() {
        return this.firstname
    },

    getFullname() {
        return `${this.firstname}, ${this.lastname}`
    }
}

console.log(user.getFirstname())   // George
console.log(user.getFullname())    // George Papadopoulos