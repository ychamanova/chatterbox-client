var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="messageText"><%= text %></div>
      </div>
    `)
};