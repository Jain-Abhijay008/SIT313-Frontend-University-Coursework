function checkGrade() {

    let marks = Number(document.getElementById("marks").value);
    let grade;

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 50) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("grade").innerHTML = "Grade: " + grade;

    if (marks >= 50) {
        document.getElementById("status").innerHTML = "Pass";
    }
    else {
        document.getElementById("status").innerHTML = "Fail";
    }
}
