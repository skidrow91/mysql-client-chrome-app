chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
      'outerBounds': {
        'width': 400,
        'height': 500
      }
    });

    // chrome.sockets.tcp.create({}, function(createInfo) {
    //   let socketId = createInfo.socketId;
    //   chrome.sockets.tcp.connect(socketId, "127.0.0.1", 3306, function(code){
    //     console.log(code);
    //   });
    // });
  });