function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzBuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(50)