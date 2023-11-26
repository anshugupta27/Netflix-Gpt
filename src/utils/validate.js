

const checkValidData = (email, password) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = /\S+\S+/.test(password);
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;


}

export default checkValidData