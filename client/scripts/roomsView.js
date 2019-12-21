var RoomsView = {

  $button: $('#rooms button'),

  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    var rooms = {

    };

    rooms['roomName'] = roomName;

    var html = Rooms.render(rooms);
    this.$select.append(html);

  }

};
