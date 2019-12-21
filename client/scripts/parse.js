var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,



  getMessage: function() {

    // extract the URL

    var link = JSON.stringify(window.location.href);

    //extract username from URL
    var getUser = function() {

      var user1 = link.split('username=')[1];
      var user = user1.substring(0, user1.length - 1); //get rid of " at the end
      return user;

    };

    var getMessage = function() {
      return $('#message').val();
    };

    var getRoomName = function() {
      return '4chan';

    };



    var messageData = function() {
      var data = JSON.stringify(
        {
          username: getUser(),
          text: getMessage(),
          roomname: getRoomName()
        });

      return data;

    };

    return messageData();

  },




  create: function(message, successCB, errorCB = null) {

  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};