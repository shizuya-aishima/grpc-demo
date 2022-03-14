import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { AppThunk } from '../../app/store'
import { Message } from '../../proto/MessageService_pb'
import { ResponseStream } from '../../proto/MessageService_pb_service'
import { messageServiceClient } from '../apis/messageService'
import { chatActions } from './reducer'

let sampleCancel: ResponseStream<Message>
export const getInit = (): AppThunk => (dispatch, getState) => {
  console.log('getInit')
  const getMessageStream = messageServiceClient.getMessageStream(new Empty())
  if (sampleCancel) {
    sampleCancel.cancel()
  }
  sampleCancel = getMessageStream.on('data', (message) => {
    console.log('on')
    dispatch(
      chatActions.setDataList(
        [message.toObject()].concat(getState().chat.dataList)
      )
    )
  })
}

export const postMessage =
  (text: string): AppThunk =>
  (dispatch) => {
    const message = new Message()
    message.setAuthorName('hoge') // 一旦適当に埋める
    message.setCreateTime(Date.now())
    message.setText(text)
    messageServiceClient.postMessage(message, (error, response) =>
      console.log(error == null ? error : response)
    )
    dispatch(chatActions.clearMessage())
  }

export const setMessage =
  (message: string): AppThunk =>
  (dispatch) => {
    dispatch(chatActions.setMessage(message))
  }
