
let myUser = createNewUser();

function createNewUser(name = null, surname = null, birthDate = null) {

    return {

        firstName: name,

        lastName: surname,

        birthday: birthDate,

        getLogin() {


            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();

        },

        getAge() {

            let dateNow = new Date();

            let validDate = `${this.birthday.slice(3, 6)}${this.birthday.slice(0, 3)}${this.birthday.slice(6, 10)} `;

            let birthDay = Date.parse(validDate);

            let userAge = dateNow - birthDay;

            let age = userAge / (365.25 * 24 * 3600 * 1000);

            return Math.floor(age)

        },

        getPassword() {

            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6, 10)}`

        },

        getfirstName() {
            return this.firstName;
        },

        setfirstName(newName) {

            Object.defineProperty(this, 'firstName', { value: newName });
        },

        getlastName() {
            return this.lastName;
        },

        setlastName(newlastName) {
            Object.defineProperty(this, 'lastName', { value: newlastName });

        }
    }
}
let userName = prompt('Enter your name');

let userSurname = prompt('Enter your surname');

let userDate = prompt('Введите дату рождения dd.mm.yyyy');


Object.defineProperty(myUser, 'firstName', { value: userName, writable: false, configurable: true });
Object.defineProperty(myUser, 'lastName', { value: userSurname, writable: false, configurable: true });
Object.defineProperty(myUser, 'birthday', { value: userDate, writable: false, configurable: true });



console.log(myUser)

console.log(myUser.getAge());

console.log(myUser.getPassword());

