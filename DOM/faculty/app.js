"use strict";

var listOfProfessors = [];
var listOfStudents = [];
var listOfExams = [];
//indexes as counters
var indexP = 0;
var indexS = 0;
var indexE = 0;

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.id = Math.floor(Math.random() * 90000) + 10000;
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
}

function Student(name, surname, indexNumber, listOfPassedExams, indexS) {
    Person.call(this, name, surname);
    this.indexNumber = indexNumber;
    this.listOfPassedExams = [];
    this.averageGrade = 0;
    this.indexS = indexS;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.addExam = function (exam) {
    this.listOfPassedExams.push(exam);
}
Student.prototype.getInfo = function () {
    return this.index + ", " + this.name + " " + this.surname + ", " + this.averageGrade;
}

function Employee(name, surname, employeeId, salary) {
    Person.call(this, name, surname);
    this.salary = salary;
    this.employeeId = Math.floor(Math.random() * 900) + 100;
}

function Professor(name, surname, employeeId, salary, officeNum, indexP) {
    Employee.call(this, name, surname, employeeId, salary, indexP);
    this.officeNum = officeNum;
    this.indexP = indexP;
}

Professor.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.employeeId;
}

function Exam(subject, professor, date, grade, indexE) {
    this.subject = subject;
    this.professor = professor;
    this.date = this.getDate(new Date(date));
    this.grade = grade;
    this.indexE = indexE;
}

Exam.prototype.getDate = function (date) {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
}
Exam.prototype.getData = function () {
    var firstChar = this.subject[0];
    return firstChar + ", date: " + this.date + ", status:" + ", grade: " + this.grade; 
}

// first consonant of first word in subject name, date (in format dd.mm.yyyy.), status and grade.

function Faculty(name) {
    this.name = name;
    this.listOfStudents = [];
    this.numberOf10 = 0;
}

//init

//create professor
var profName = document.querySelector("#prof-name");
var profSurname = document.querySelector("#prof-surname");
var office = document.querySelector("#office");
var salary = document.querySelector("#salary");
var submitProfessorBtn = document.querySelector("#submit-professor");
var professorSelectDropdown = document.querySelector("#professor-select");
var listRightProfessors = document.querySelector("#list-right-professors");

//create student
var studentName = document.querySelector("#student-name");
var studentSurname = document.querySelector("#student-surname");
var studentIndex = document.querySelector("#index-number");
var studentStatus = document.querySelector("#student-status");
var submitStudentBtn = document.querySelector("#submit-student");
var studentSelectDropdown = document.querySelector("#student-select");
var listRightStudents = document.querySelector("#list-right-students");

//exam
var examSubject = document.querySelector("#subject");
var examDate = document.querySelector("#date");
var examGrade = document.querySelector("#grade-select");
var submitExamBtn = document.querySelector("#submit-exam");
var listRightExams = document.querySelector("#list-right-exams");

function createPerson(name, surname) {
    var person = new Person(name, surname);
    return person;
}

function createStudent(name, surname, indexNumber, listOfPassedExams, indexS, studentStatus) {
    var student = new Student(name, surname, indexNumber, listOfPassedExams, indexS);
    // add status as a read only property 
    Object.defineProperty(student, 'status', {
        value: studentStatus,
        writable: false
    });
    listOfStudents.push(student);
    return student;
}

function createProfessor(name, surname, employeeId, salary, officeNum, indexP) {
    var professor = new Professor(name, surname, employeeId, salary, officeNum, indexP);
    listOfProfessors.push(professor);
    return professor;
}

function createExam(subject, professor, date, grade, indexE) {
    var exam = new Exam(subject, professor, date, grade, indexE);
    return exam;
}

function appendElement(element, placeToAppend, itemToAppend, index) {
    var currentElement = document.createElement(element);
    currentElement.textContent = itemToAppend.getData();

    if (element == "option") {
        currentElement.value = index;
    }
    
    placeToAppend.appendChild(currentElement);
}

submitProfessorBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var nameVal = profName.value || "";
    var surnameVal = profSurname.value || "";
    var officeVal = office.value || "";
    var salaryVal = salary.value || "";

    if (nameVal && surnameVal && officeVal && salaryVal) {
        var currentProfessor = createProfessor(nameVal, surnameVal, "dummy_employee_id", salaryVal, officeVal, indexP);
        appendElement("option", professorSelectDropdown, currentProfessor, indexP);
        appendElement("li", listRightProfessors, currentProfessor);
        indexP++;
    }
});
submitStudentBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var nameVal = studentName.value || "";
    var surnameVal = studentSurname.value || "";
    var studentIndexVal = studentIndex.value || "";
    var studentStatusVal = studentStatus.value || "";

    if (nameVal && surnameVal && studentIndexVal) {
        var currentStudent = createStudent(nameVal, surnameVal, studentIndexVal, "", indexS, studentStatusVal);
        appendElement("option", studentSelectDropdown, currentStudent, indexS);
        appendElement("li", listRightStudents, currentStudent);
        indexS++;
    }
});

submitExamBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var examSubjectVal = examSubject.value || "";
    var examDateVal = examDate.value || "";
    var examGradeVal = examGrade.value || "";
    var examProfVal = professorSelectDropdown.value || "";
    var examStudVal = studentSelectDropdown.value || "";
    
    if(examGradeVal && examDateVal && examSubjectVal && examStudVal && examProfVal) {
        var currentExam = createExam(examSubjectVal, examProfVal, examDateVal, examGradeVal, indexE);
        listOfExams.push(currentExam);
        appendElement("li", listRightExams, currentExam);
        indexE++;
        
    }
});


