import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getInit } from 'features/chats/operations'
import React, { useEffect } from 'react'
import Message from './Message'

const MessageList: React.FC = () => {
  const dispatch = useAppDispatch()
  const chatState = useAppSelector((state) => state.chat)
  useEffect(() => {
    dispatch(getInit())
  }, [dispatch])

  return (
    <div>
      {chatState.dataList.map((protoMessage) => (
        <Message {...protoMessage} key={protoMessage.createTime} />
      ))}
    </div>
  )
}

export default MessageList
