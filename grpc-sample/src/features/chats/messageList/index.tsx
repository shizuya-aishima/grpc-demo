import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Message from '../../../components/message'
import { getInit } from '../operations'

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
