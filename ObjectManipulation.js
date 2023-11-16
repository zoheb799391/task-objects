const employees = {
   
    name:'zoheb',
    position:'intern',
    salary:'20000'
   

}

function salaryhike(b) {
    const sal = employees.salary *(b/100) 
    console.log('percentage hike interms of % is ' , sal)
}

salaryhike('20')