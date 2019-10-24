class ChatMessageChannel < ApplicationCable::Channel
  def subscribed;stream_from "chat_message_channel";end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
  	@message = Message.create(body: data["message"])
  	data['id'] = @message.id
  	ActionCable.server.broadcast 'chat_message_channel',message: data
  end
  # 　speakメソッドのActionCable.server.broadcastでは第1引数にチャネル名を、第2引数に発言メッセージを指定することで、サーバー側からChatMessageChannelにWebSocketで接続している全クライアントに対して発言メッセージを配信することができます
  # クライアント側で、発言メッセージを指定したキーワード引数を取るように定義しました
end
