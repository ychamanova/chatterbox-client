var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  renderHTML: function() {
    var compiled = _.template(

      `<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>
        <div class='movie-info'>
          <h3 class='movie-title'>
             <%= movieTitle %>
          </h3>
          <p class='movie-director'>
             <%= movieDirector %>
          </p>
        </div>
      </div>`
    );

    return compiled;
  },



  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    var getMessages = $.get(`http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`, function(data) {
      var i;
      var html = '';
      for (i = 0; i < data.results.length; i++) {
        html += compiled(data.results[i]);
      }
      $('#chats').append(html);
      console.log(data);
    });



    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
