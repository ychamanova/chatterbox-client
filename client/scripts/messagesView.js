var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    if (message.username === undefined) {
      return;
    }
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};