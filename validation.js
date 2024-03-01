function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (!username || !password) {
        document.getElementById('error-message').innerText = 'Please enter both username and password.';
        return;
    }

    
    var hashedPassword = bcrypt.hashSync(password, 10);

   
    document.getElementById('error-message').innerText = 'Login successful!';
}
