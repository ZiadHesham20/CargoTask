
let loginButton = document.querySelector('.loginButton');
loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  let email = document.querySelector('.emailInput').value;
  let password = document.querySelector('.passwordInput').value;
  let resError = document.querySelector('.error');
  let resSuccess = document.querySelector('.success');

  loginButton.classList.add('is-loading');

  setTimeout(async () => {

    let data = {
      "email": email,
      "password": password
    }

    try {
      let res = await axios.post('https://2cdhd3vem9.execute-api.us-east-2.amazonaws.com/dev/auth/login', data)
      resError.classList.remove('is-hidden');
      resSuccess.classList.remove('is-hidden');
      let userData = await res.data.user;
      localStorage.setItem('userData', JSON.stringify(userData))
      window.location.href = 'http://127.0.0.1:5000/dummy'
    } catch (error) {
      resError.innerHTML = error.response.data.message;
      resError.classList.remove('is-hidden');
    }
    loginButton.classList.remove('is-loading');
  }, 5000);
});
