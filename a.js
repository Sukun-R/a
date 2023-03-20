const connection = new WebSocket('wss://sukun-r.github.io/a/');
connection.onmessage = function(e) {
　alert(e.data)
};
