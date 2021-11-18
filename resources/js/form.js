$(document).ready(function() {
  // Form validation
const form = $('#applForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const permission = document.getElementById('permission');
const emptyFieldMsg = 'Šis lauks ir obligāts';

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

  $.validator.addMethod('nameRegex', function(value, element){
    return this.optional(element) || /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/.test(value);
  }, 'Jāievada vārds bez cipariem un simboliem');


  form.validate({
    errorPlacement: function( error, permission ) {
        error.appendTo(permission.parent('div'));
    },
    rules: {
      name: {required: true, nameRegex: true, minlength: 2, maxlength: 64},
      email: {required: true, email: true, maxlength: 254},
      company: {required: true, maxlength: 300},
      phone:  {required: true, phoneRegex: true, maxlength: 15, minlength: 8},
      message: 'required',
      permission: 'required'
    },
    messages: {
      name: {required: emptyFieldMsg, nameRegex: 'Jāievada vārds bez cipariem un simboliem', minlength: 'Jābūt ievadītām vismaz 2 rakstu zīmēm', maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 64'},
      email: {required: emptyFieldMsg, email: 'Jāievada derīga e-pasta adrese',  maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 254' },
      company: {required: emptyFieldMsg, maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 300'},
      phone: {required: emptyFieldMsg, phoneRegex: 'Jāievada derīgs telefona numurs', maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 15', minlength: 'Jāievada vismaz 8 cipari'},
      message: emptyFieldMsg,
      permission: 'Lauciņam jābūt atķeksētam, lai turpinātu'
    },
    /* errorPlacement: function(error, permission){
      error.appendTo(permission.parent('div'));
    }, */
    
  });

  // ------------------------- Form submit message

  form.on('submit', function(event){
    event.preventDefault();
    
    const submitMsg = document.createElement('div');
      $(submitMsg).addClass('submit-message');
      const html = "<p>Paldies, ka sapņo!</p><p>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</p>";
      $(submitMsg).html(html);
    if(form.valid() === true){
      $('.form-info').hide();

      $('.form-container').css({marginBottom: '12.3rem' });
      $('.form-container.form-container-extra-margin').css({marginBottom: '14.2rem' });
      if($(window).width() < 769) {
        $('.form-container.form-container-extra-margin').css({marginBottom: '9rem' });
      }
      if($(window).width() < 577) {
        $('.form-container.form-container-extra-margin').css({marginBottom: '11.1rem' });
      }
      $('.form-container').append(submitMsg);
      $('#submitBtn').hide();
    } 
  });
});

