import { AppThunk } from '../../../app/store'
import { Room } from '../../../proto/MessageService_pb'
import { messageServiceClient } from '../../apis/messageService'
import { CreateRoomType } from './types'

export const roomCreateOperations = {
  createRoom:
    (data: CreateRoomType): AppThunk =>
    () => {
      const room = new Room()
      room.setRoomName(data.name)
      messageServiceClient.createRoom(room, (error, response) => {
        console.log(error)
        console.log(response)
        // console.log(error?.code)
      })
    },
}
