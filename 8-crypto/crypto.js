const encryptPassword = password => {
    const splittedPassword = password.split('');
    const length = splittedPassword.length

    for (let i = 0; i < Math.floor(length / 2); i++) 
        [splittedPassword[i], splittedPassword[length - 1 - i]] = [splittedPassword[length - 1 - i], splittedPassword[i]];

    return splittedPassword.join('');
}

const comparePasswords = (encryptedPassword, password) => encryptPassword(encryptedPassword) === password

const password = '1234567';
const encryptedPassword = encryptPassword(password);

console.log(`Результат сравнения паролей: ${comparePasswords(encryptedPassword, password)}`);