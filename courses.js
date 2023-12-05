//Create a class named Courses
class Courses {
    //Create constructor with attributs courseName courseWebsite
    constructor(courseName, contactWebsite){
        this.courseName = courseName;
        this.contactWebsite = contactWebsite;
    }
    // Method to display the contact website of the selected coursed
    display(){
        console.log(`This is ${this.contactWebsite} for ${this.courseName}`);
    }
}

// Create a subclass named Subjects that will inherit from Courses with atleast two attributes added to this class
class Subjects extends Courses {
    constructor(courseName, contactWebsite, courseAverage, courseCode, subjectLecturer, subjectPrerequisites) {
        super(courseName, contactWebsite); //This allows access to method and attributes in the parent cass we are inheriting from
        this.courseAverage = courseAverage;
        this.courseCode = courseCode;
        this.subjectLecturer = subjectLecturer;
        this.subjectPrerequisites = subjectPrerequisites;
    }
    //Method to display what course it belongs to and two other attributes created
    display(){
        console.log(`This subject belongs to ${this.courseName}`);
        console.log(`This ${this.courseCode} has a pass record of ${this.courseAverage}`);
        console.log(`This is achieved by the teachings of an amazing ${this.subjectLecturer}`);
        console.log(`This subject has ${this.subjectPrerequisites} requirements for entry.For more information visit ${this.contactWebsite}`);
    }
}

const biology = new Subjects("Biology", "www.biology.com", 65, "B010", "Augustine Masilela","none");
biology.display();