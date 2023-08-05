 // Function to generate an 8-digit password
 function generatePassword() {
    var password = "";
    var characters = '0123456789';
    var passwordLength = 8 ;

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex] ;
    }

    document.getElementById('password').textContent = 'Generated Code: ' + password;
  }