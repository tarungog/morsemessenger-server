import pusher

pusher_client = pusher.Pusher(
  app_id='311977',
  key='7d21169e336fb7244895',
  secret='7357f1380b714288bb23',
  ssl=True
)

pusher_client.trigger('my-channel', 'my-event', {'message': 'Yo wtf is happening!'})