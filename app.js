const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.querySelector('.toggle-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  checkError(firstName, fName, "First Name cannot be empty");
  checkError(lastName, lName, "Last Name cannot be empty");
  checkError(email, emailVal, "Looks like this is not an email", validateEmail);
  checkError(password, passwordVal, "Password cannot be empty");
});

togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

function checkError(input, value, message, validationFunc = null) {
  if (value === '' || (validationFunc && !validationFunc(value))) {
    input.classList.add('error');
    input.nextElementSibling.textContent = message;
  } else {
    input.classList.remove('error');
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
