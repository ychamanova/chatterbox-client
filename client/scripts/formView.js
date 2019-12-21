var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    console.log(event);
    // Stop the browser from submitting the form
    event.preventDefault();
    //POST message to server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: Parse.getMessage(),
      contentType: 'application/json',
      //on success
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      //on error
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
    //clear the message input field
    $('#message').val('');
  },
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};