#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would u like to interact with..?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("You approach the staff room, Feel free to ask any question");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you want to engage with"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello! I am ${name},  Nice to see you`);
                console.log("New student added");
                console.log(`**Current Student's List**`);
                console.log(persons.students);
            }
            else {
                console.log(`Hello! I am ${student.name},  Nice to see you again`);
                console.log(`**Current Student's List**`);
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting The Program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
