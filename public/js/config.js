// config.js
turnConfig = {
  iceServers: [
    {
      urls: ["turn:20.235.254.6:3478"],
      username: "examly-turnserver",
      credential: "examly@123"
    },
    {
      urls: ["turn:turn-server.centralindia.cloudapp.azure.com:3478"],
      username: "examly-turnserver",
      credential: "examly@123"
    },
    {
      urls: ["turn:dualproctoring.turn-server.examly.io:3478"],
      username: "examly-turnserver",
      credential: "examly@123"
    }
  ]
}
