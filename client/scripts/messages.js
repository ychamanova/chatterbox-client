var Messages = {
  render: _.template(`
  <div class = 'message'>
    <div class = 'username'>
      <%-userName %>
    </div>
    <div class = 'messageText'>

      <%-messageText %>

    </div>
  </div>
  `)
};