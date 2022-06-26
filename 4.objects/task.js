function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
};

Student.prototype.addMarks = function (...marks) {
    if (typeof this.marks !== 'undefined') {
        this.marks.push(...marks);
    } else {
        this.marks = marks;
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    if (typeof this.marks === 'undefined') {
        return sum;
    }
    sum = this.marks.reduce((previousValue, currentValue) => previousValue + currentValue);
    return sum !== 0 ? Math.round(sum / this.marks.length) : sum;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded  = reason;
}