//let number = +prompt('Enter number'),
//    stepen = +prompt('Enter the degree of the number');

//    let answer = 1;

//    for(let i = 0; i < stepen; i++) {
//        answer = answer * number
//    }

//    alert(answer);


let name = prompt('Enter the name', ''),
    birthYear = +prompt('Enter the borth of year', ''),
    currentYear = +prompt('Enter the current year', '');


    function getAge(n, bY, cY) {
        let age = cY - bY
        return n + ', Your age ' + age;
    }

    alert(getAge(name, birthYear, currentYear));


