const person = {
name :'habcisa',
age :'22',
address: 'hyd',
 
}

 function details(personObj) {
    const keysList = (Object.keys(personObj))
    for(let i=0;i<keysList.length;i++) {
        console.log(keysList[i]);
    }

    for(key in personObj) {
        console.log(key)
    }

 }

details(person)