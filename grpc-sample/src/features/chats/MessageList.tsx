import React from 'react';
import Message from './Message';
import { Message as ProtoMessage } from '../../proto/MessageService_pb';
import attatchMessageServiceClient, { MessageServiceClientAttached } from './attachMessageServiceClient';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

interface MessageListState {
    protoMessageList: ProtoMessage.AsObject[];
}

class MessageList extends React.Component<void & MessageServiceClientAttached, MessageListState> {
    constructor(props: {} & MessageServiceClientAttached) {
        super(props);
        this.state = { protoMessageList: [] };
        // message streamの取得
        const messageStream = props.client.getMessageStream(new Empty());
        // streamからmessageを受け取るたび、それをprotoMessageListに格納するハンドラを登録する
        messageStream.on('data', message => {
            const newProtoMessageList = [message.toObject()].concat(this.state.protoMessageList);
            this.setState({ protoMessageList: newProtoMessageList });
        });
    }

    render() {
        return (
            <div>
                {this.state.protoMessageList.map(protoMessage => (
                    <Message {...protoMessage} key={protoMessage.createTime} />
                ))}
            </div>
        );
    }
}

export default attatchMessageServiceClient(MessageList);
