
App.chatmessage = App.cable.subscriptions.create("ChatMessageChannel", {
  connected: function() {
    //読み込まれたらよみこまれたらconnection成功
    //1 conectionのところなので、初めに読まれる
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    //ここがdone(受け取り場所)になるのでjsを書く
    let message_id = data['message']['id']
    let message_text = data['message']['message']
    let html =`
      <tr>
      <td><a href="/messages/${message_id}">Show</td>
      <td><a href="/messages/${message_id}/edit">Edit</td>
      <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/messages/${message_id}">Destroy</td>
      <td>${message_text}</td>
      </tr>`
        $("#message").append(html)
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(message) {
    //3 最後にここが読まれてchannelに飛ぶ
    return this.perform('speak',{message: message});
    //ここからchannelのdef speak endにつながる
  }
  }, $(document).on('keypress', '[data-behavior~=speak_chat_messages]', function(event) {
    //2 次にここが読まれる
  if (event.keyCode === 13){
   App.chatmessage.speak(event.target.value)
    event.target.value = ''
    event.preventDefault()
  }
}));
