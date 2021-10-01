function seepass () {
  if (document.getElementById('password').type === 'password')
    document.getElementById('password').type = 'text'
  else {
    document.getElementById('password').type = 'password'
  }
}
function check () {
  var nameVar = document.getElementById('name').value
  var usernameVar = document.getElementById('Username').value
  var emailVar = document.getElementById('email').value
  var phoneVar = document.getElementById('phone-no').value
  var passwordVar = document.getElementById('password').value
  var confirmPasswordVar = document.getElementById('password-confirm').value

  if (nameVar == '') {
    document.getElementById('name-id').innerHTML = '* Please fill the name'
    return false
  } else {
    document.getElementById('name-id').innerHTML = ''
  }
  if (!isNaN(nameVar)) {
    document.getElementById('name-id').innerHTML = '* Please enter correct name'
    return false
  } else {
    document.getElementById('name-id').innerHTML = ''
  }
  if (usernameVar == '') {
    document.getElementById('username-id').innerHTML =
      '* Please fill the Username'
    return false
  } else {
    document.getElementById('username-id').innerHTML = ''
  }
  if (emailVar == '') {
    document.getElementById('email-id').innerHTML = '* Please fill the Email-id'
    return false
  } else {
    document.getElementById('email-id').innerHTML = ''
  }

  if (emailVar[0] == '@') {
    document.getElementById('email-id').innerHTML = '* Invalid'
    return false
  } else {
    document.getElementById('email-id').innerHTML = ''
  }

  if (
    emailVar.charAt(emailVar.length - 4) != '.' &&
    emailVar.charAt(emailVar.length - 3) != '.'
  ) {
    document.getElementById('email-id').innerHTML = '* Invalid'
    return false
  } else {
    document.getElementById('email-id').innerHTML = ''
  }

  if (phoneVar == '') {
    document.getElementById('phone-id').innerHTML =
      '* Please fill the Phone number'
    return false
  } else {
    document.getElementById('phone-id').innerHTML = ''
  }
  if (isNaN(phoneVar)) {
    document.getElementById('phone-id').innerHTML = '* Please enter digits'
    return false
  } else {
    document.getElementById('phone-id').innerHTML = ''
  }
  if (phoneVar.length != 10) {
    document.getElementById('phone-id').innerHTML = '* Please enter 10 digits'
    return false
  } else {
    document.getElementById('phone-id').innerHTML = ''
  }

  if (passwordVar == '') {
    document.getElementById('password-id').innerHTML =
      '* Please fill the Password'
    return false
  } else {
    document.getElementById('password-id').innerHTML = ''
  }
  if (passwordVar.length < 5 || passwordVar.length > 20) {
    document.getElementById('password-id').innerHTML =
      '* Enter password within 5 to 20 range'
    return false
  } else {
    document.getElementById('password-id').innerHTML = ''
  }
  if (confirmPasswordVar == '') {
    document.getElementById('confirmPassword-id').innerHTML =
      '* Please fill the Confirm Password field'
    return false
  } else {
    document.getElementById('confirmPassword-id').innerHTML = ''
  }
  if (passwordVar !== confirmPasswordVar) {
    document.getElementById('confirmPassword-id').innerHTML =
      "* Password doesn't match"
    return false
  } else {
    document.getElementById('confirmPassword-id').innerHTML = ''
  }

  alert('Form submitted successfully\nThank you')
}

function clearFunc () {
  document.querySelectorAll('input').values = ''
}
