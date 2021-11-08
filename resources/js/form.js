$(document).ready(function() {
  // Form validation
const form = $('#applForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const permission = document.getElementById('permission');
const emptyFieldMsg = 'Lauciņš nedrīkst palikt tukšs';

  $(window).on('load', function(){
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
    if(company) {
      company.value = '';
    }
  });

  $.validator.addMethod('phoneRegex', function(value, element){
    return this.optional(element) || /^[0-9\s\(\)\+\-]+$/.test(value);
  }, 'Jāievada derīgs telefona numurs');


  form.validate({
    rules: {
      name: {required: true, minlength: 2, maxlength: 64},
      email: {required: true, email: true, maxlength: 254},
      company: {required: true, maxlength: 300},
      phone:  {required: true, phoneRegex: true, maxlength: 15, minlength: 8},
      message: 'required',
      permission: 'required'
    },
    messages: {
      name: {required: emptyFieldMsg, minlength: 'Jābūt ievadītām vismaz 2 rakstu zīmēm', maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 64'},
      email: {required: emptyFieldMsg, email: 'Jāievada derīga e-pasta adrese',  maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 254' },
      company: {required: emptyFieldMsg, maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 300'},
      phone: {required: emptyFieldMsg, phoneRegex: 'Jāievada derīgs telefona numurs', maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 15', minlength: 'Jāievada vismaz 8 cipari'},
      message: emptyFieldMsg,
      permission: 'Lauciņam jābūt atķeksētam, lai turpinātu'
    },
    errorPlacement: function(error, permission){
      error.appendTo(permission.parent('div'));
    }
  });

  // ------------------------- Form submit message

  form.on('submit', function(event){
    event.preventDefault();
    
    if(form.valid() === true){
      $('.form-info').hide();

      $('.form-container').css({marginBottom: '12.3rem' });
      $('.form-container.form-container-extra-margin').css({marginBottom: '14.2rem' });
      $('#submitBtn').hide();
    } 
  });
});

