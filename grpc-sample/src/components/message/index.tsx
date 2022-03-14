import React from 'react'
import { Message as PostMessage } from '../../proto/MessageService_pb'

const Message: React.FC<PostMessage.AsObject> = (protoMessage) => (
  <div>
    {protoMessage.text} ({new Date(protoMessage.createTime).toString()})
  </div>
)

export default Message
