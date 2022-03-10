import React from 'react'
import { Message as ProtoMessage } from 'proto/MessageService_pb'

const Message: React.FC<ProtoMessage.AsObject> = (protoMessage) => (
  <div>
    {protoMessage.text} ({new Date(protoMessage.createTime).toString()})
  </div>
)

export default Message
