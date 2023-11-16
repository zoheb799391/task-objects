const user =  {
    Username : 'zoheb',
    Email:'zohebgmail.com',
    Password:'Qetry123'

}

function validate() {
    const  passw=  /^[A-Za-z]\w{7,14}$/;
    const email = /^\S+@\S+\.\S+$/;
    if(user.Username.length < 5) {
        console.log('username is too short')
    } else if (!user.Password.match(passw)) {
console.log('password is not valid')
    } else if(!user.Email.match(email)) {
        console.log('email is not matching');
    } else {
        console.log('user created')
    }
}
validate()  ``