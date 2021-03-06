async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const v_fname = document.querySelector('#fname').value.trim();
  const v_lname = document.querySelector('#lname').value.trim();

  if (username && password && v_fname && v_lname) {
    const response = await fetch('/api/volunteer/signup', {
      method: 'post',
      body: JSON.stringify({ username, password, v_fname, v_lname }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    }
    else {
      alert(response.statusText);
    };
  };
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);