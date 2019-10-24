// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
//このthisはわからん


//「cable.js」は、クライアントからサーバーに対してWebSocket接続しているコードです。App.cable = ActionCable.createConsumer();でWebSocket通信を確立しています。

// 接続した時」「受信した時」「接続を拒否された時」及び「チャネルにブロードキャストする」処理
