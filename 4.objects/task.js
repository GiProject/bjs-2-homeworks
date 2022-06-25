function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    return this;
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
        this.marks = this.marks.concat(marks);
    } else {
        this.marks = marks;
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    if (typeof this.marks === 'undefined') {
        return sum;
    }
    this.marks.forEach(function (mark) {
       sum += mark;
    });
    return sum !== 0 ? sum / this.marks.length : sum;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded  = reason;
}