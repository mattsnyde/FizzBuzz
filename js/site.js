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
    for(let i = firstNum; i < secondNum; i++){
        if(i % 3 === 0 && i % 5 === 0){
            info.push('FizzBuzz')
        }else if(i % 3 === 0){
            info.push('Fizz')
        }else if(i % 5 === 0){
            info.push('Buzz')
        }else{
            info.push(i)
        }
    }
    return info;
}

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