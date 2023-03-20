const connection = new WebSocket();
connection.onmessage = function(e) {
　alert(e.data)
};
