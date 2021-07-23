//Controller function
function getValues(){
    const firstNum = document.getElementById('firstNumber').value 
    const secondNum = document.getElementById('secondNumber').value;

    parseInt(firstNum)
    parseInt(secondNum)
        
    evaluateFizzBuzz(firstNum, secondNum)

    let data = evaluateFizzBuzz(firstNum, secondNum)
    display(data)
 
}

//Logic function
function evaluateFizzBuzz(firstNum, secondNum){
    let info = [];
 
    for(let i = 1; i <= 100; i++){
        if(i % firstNum === 0 && i %secondNum === 0){
            info.push('FizzBuzz')
        }else if(i % firstNum === 0){
            info.push('Fizz')
        }else if(i % secondNum === 0){
            info.push('Buzz')
        }else{
            info.push(i)
        }
    }
    return info;
}

// function evaluateFizzBuzzA(firstNum, secondNum){ //A different way to solve the fizzBuzz algorithm
//     let info = [];

//     let fizz = false;
//     let buzz = false;

//     for(let i = 1; i <= 100; i++){
//         fizz = i % firstNum === 0; //This will evaluate to true or false, it checks to see if i divided by firstNum has remainder of 0, if it does return true otherwise false
//         buzz = i % secondNum === 0 //This will evaluate to true or false, it checks to see if i divided by secondNum has remainder of 0, if it does return true otherwise false.

//         //Using a switch statement with a parameter of true to add infromation to the array/
//        switch(true){
//            case fizz && buzz:{ //If fizz and buzz both evalyuate to true wer willpush fizzBuzz to array
//                 info.push('FizzBuzz')
//                 break;
//            }
//            case fizz:{ //if fizz is true and buzz is false then we will only push Fizz to array
//                info.push('Fizz');
//                break;
//            }
//            case buzz:{ //If buzz is true and fizz is false then we will only push Buzz to array
//                info.push('Buzz')
//                break;
//            }
//            default:{ //If neither fizz nor buzz is true then I will just poush i to the array by default.
//                info.push(i)
//                break;
//            }
//        }
//     }
//     return info;
// }

// function evaluateFizzBuzzB(firstNum, secondNum){
//     let info = [];

//     for(let i = 1; i <= 100; i++){
//         //Using ternary operators.
//         //What the question mark allows us to do is say, if this is true then do this, and if it is false then do this. A colon is representative of else 
//             //Example: looking at i%firstNum === 0 ? 'Fizz' : ''. This is saying that if i divided by firstNum and if the remainder is 0 return 'Fizz' and the colon represents else. So if i dvided by firstNum does not haver a remainder of 0 it will reutrn an empty string,
//             //An empty string evaluates to false
//             //Any number evaluates to true.
//             let value = ((i%firstNum === 0 ? 'Fizz' : '' ) + (i % secondNum === 0 ? 'Buzz' : '') || i)
//             info.push(value)
//     }

//     return info;
// }

function display(data){
    let tableBody = document.getElementById('results') //get the body for the table
    let templateRow = document.getElementById('fbTemplate') //Get the template for the table
    tableBody.innerHTML = ''; //clears table
    for(let i = 0; i < data.length; i+=5){
        let tableRow = document.importNode(templateRow.content, true) //This will import the contents of the fbTemplate as a document fragment, I am able to make a copy of it and put it inside of results tbody. The template itself is never changed it just makes copies of itself. true means it will get everything inside of the template. 
        let rowCols = tableRow.querySelectorAll('td')//Can put all of the td's from the fbTemplate in an array to determine how many columns need to be in the table

        //Using our template I made in app.html we have 5td's which is equivalent to an array of length of 5 which is why I am able to iterate through rowCols using 0,1,2,3,4 
        rowCols[0].classList.add(data[i])
        rowCols[0].textContent = data[i]

        rowCols[1].classList.add(data[i + 1])
        rowCols[1].textContent = data[i + 1]

        rowCols[2].classList.add(data[i + 2])
        rowCols[2].textContent = data[i + 2]

        rowCols[3].classList.add(data[i + 3])
        rowCols[3].textContent = data[i + 3]
        
        rowCols[4].classList.add(data[i + 4])
        rowCols[4].textContent = data[i + 4]

        //add all of the rows to the table
        tableBody.appendChild(tableRow)         
    }   
}