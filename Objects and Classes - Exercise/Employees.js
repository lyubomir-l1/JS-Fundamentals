function employees(input){
    
    let employee = {};
    input.forEach(person => {
        employee[person] = person.length;
    });
    for (const key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
    }
    }
    