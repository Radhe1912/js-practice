function generatePassword() {
    const length = 12;
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allCharacters = lowercase + uppercase + numbers + symbols;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*allCharacters.length);
        password += allCharacters[randomIndex];
    }
    document.getElementById("passwordDisplay").textContent = password;
}