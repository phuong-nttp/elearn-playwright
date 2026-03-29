//cau 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year)

//cau 2
const person = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}
console.log(person.address.street)

//cau 3
const student = {
    name: "John Doe",
    grades: {
        math: 9,
        english: 10,
    }

}
console.log(student["grades"]["math"])

//cau 4
const settings = {
    volume: 50,
    brightness: 80,
}
settings.volume = 100
console.log(settings.volume)

//cau 5
const bike = {

}
bike.color = "red"
console.log(bike.color)

//cau 6
const employee = {
    name: "John Doe",
    age: 20,
}
delete employee.age
console.log(employee)

//cau 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school)