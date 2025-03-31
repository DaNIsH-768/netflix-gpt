export const validateUser = (email, password) => {
    const emailIsValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const passwordIsValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!emailIsValid) return "Invalid email";
    else if (!passwordIsValid) return "Invalid password";
    else return null;
}