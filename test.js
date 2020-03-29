document.getElementById("test").addEventListener('click', function(e) {
    chrome.sockets.tcp.create({}, function(createInfo) {
      let socketId = createInfo.socketId;
      chrome.sockets.tcp.connect(socketId, "127.0.0.1", 3306, function(code){
        // console.log(code);
        // chrome.sockets.tcp.getInfo(socketId, function(socketInfo){
        //   console.log(socketInfo);
        // })
        let buffer = new ArrayBuffer(8);
        chrome.sockets.tcp.send(socketId, buffer,function(socketInfo){
          console.log(socketInfo);
        })
      });
    });
});