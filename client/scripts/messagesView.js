var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};