// const name = document.getElementById('name');
// const password = document.getElementById('password');
const forms = document.forms.demoForm;
const errorElement = document.getElementById('error');

forms.addEventListener('submit', e => {
  let message = [];

  if(forms.name.value === '' || name.value === null) {
    message.push('※Nameを入力してください。');
  };

  if(forms.password.value.length <= 6){
    message.push('※Passwordは7文字以上で入力してください。');
  };

  if(message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join('\n')
  };

})
