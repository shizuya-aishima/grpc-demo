import { useAppDispatch, useAppSelector } from 'app/hooks'
import { postMessage, setMessage } from 'features/chats/operations'
import React, { FormEvent } from 'react'

const PostForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const message = useAppSelector((state) => state.chat.message)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postMessage(message))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='inputText'
          value={message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default PostForm
