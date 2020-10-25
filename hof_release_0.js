function sendMessage(message,fn){
fn(message);
}
sendMessage('hello',console.log);
