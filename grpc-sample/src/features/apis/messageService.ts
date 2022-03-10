import { MessageServiceClient } from '../../proto/MessageService_pb_service'

export const messageServiceClient = new MessageServiceClient(
  `http://localhost:3000`
)
