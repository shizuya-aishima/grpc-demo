// proto定義の読み込み
const PROTO_PATH = __dirname + "/../../proto/MessageService.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { EventEmitter } = require("events");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const messageService =
    grpc.loadPackageDefinition(packageDefinition).MessageService;

console.log(messageService);
// PostMessageにより投稿されたメッセージをGetMessageStreamで返却するstreamに流すための中継器
const messageEventEmitter = new EventEmitter();
// 過去ログを保存する配列
const pastMessageList = [];

// モック
function PostMessage(call, callback) {
    // 受け取ったメッセージを過去ログに保存する
    const message = call.request;
    pastMessageList.push(message); // messageEventEmitter経由で、getMessageStreamで返却するstreamにメッセージを送る
    messageEventEmitter.emit("post", message);

    // レスポンスを返す
    callback(null, { status: "ok" });
}
// モック
function GetMessageStream(call) {
    // 過去ログをstreamに流し込む
    pastMessageList.forEach((message) => call.write(message));
    // PostMessageが実行されるたびに、そのメッセージをstreamに流し込む
    const handler = (message) => call.write(message);
    messageEventEmitter.on("post", handler);
    // callback(null, { status: "Hello " });
}

// サーバの設定
function main() {
    const server = new grpc.Server();
    // モックの組み込み
    server.addService(messageService.service, {
        PostMessage: PostMessage,
        GetMessageStream: GetMessageStream,
    });
    server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
