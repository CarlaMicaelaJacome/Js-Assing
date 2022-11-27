import { INSPECT_MAX_BYTES } from "buffer";
import { getRandomValues } from "crypto";
import readline from "readline";
const rl =readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  const availableAge = []

// requeriments in order//

//1- Show all students in table format.//

  const tabla = console.table(students);

//2- Display the number of students in the class on the console.//

  const totalStudents = console.log("\n" + students.length);

//3- Display all student names on the console.//

  const getNames = console.log("\n" + availableMaleNames + availableFemaleNames);

//4- Remove the last student of the class.//

  const deleteLast = students.pop();

//5- Randomly remove a student from the class.//

  const deleteRandom = students.splice(getRandomNumber(0, students.length),1);

//6- Show by console all the data of the female students.//

  const femaleData = () =>{
    students.forEach(student) {
        if (student.gender === "female"){
            console.log(student);
        }
    };
  };

//7- Display by console the number of male and female students in the class.//
 
const numberGender = () => {
    let maleNumber = 0;
    let femNumber = 0;

    students.forEach(student =>{
        if (student.gender === "female"){
            femNumber++;
        } else{
            maleNumber++;
        }
    });
    
    console.log(' ${maleNumb} chicos y ${femNumb} chicas.');
};
  
//8- Display true or false by console if all the students in the class are girls//
 
const trueOrFalse = ( {
    if students.gender === 'female' array.forEach(element => {
        
    });

})
//9- Show by console the names of the students who are between 20 and 25 years old.//

const early = () => {
    students.forEach(
        (student)=>{
            if (student.age >= 20 & student.age <= 25) {
                console.log(student.name);
            }
        }
    );

};

/*Add a new student with the following data:
-Random name.
-Random age between 20 and 50 years.
-Random gender.
-Empty grades list.*/

const newRandom = () =>{
    let RandomGender = availableGenders;
    let RandomAge = getRandomNumber(20, 50,);
    let RandomName = getRandomValues(availableFemaleNames & availableMaleNames)

    students.push({
        age: RandomAge,
    examScores: [],
    gender: RandomGender,
    name: RandomName,
    }

    );
};

//11- Display by consoloe the name of the youngest student of the class//

 const youngest = (student.age) get

//12- Display the average age of all students in the class by console.//

 const sumAge = (students)  => {
    let studentsAge = [];
    for (let index = 0; index< students.length; index ++){
        studentsAge.push(students[index].age);
    };
    return studentsAge.reduce((valueA, ValueB) => valueA + ValueB, 0);
  } ;

  console.log(sumAge(students));

//13- Dispplay by console the average age of all the female students.//

const mediaFem = () => {
    console.log("\n" + 'female students');
    getAverage(students.gender("female"));
}

//14- Add a new grade to all the students. For each student of the class, we have to randomly calculate a grade between 0 and 10, and add it to their grades list.//

const newGrade = () => addGrades(students);

//15- Sort the array of students alphabetically by name.//
const order = () =>
 students.sort((A, B) =>
 A.name.localeCompare(B.name));