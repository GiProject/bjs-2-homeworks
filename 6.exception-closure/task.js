function parseCount(value) {
    let result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
    
}

class Triangle {
    constructor(a,b,c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let s = (this.a + this.b + this.c) / 2;
        return Math.round(Math.sqrt( s * (s - this.a) * (s - this.b) * (s - this.c) ) * 1000)/1000;
    }
}