turnConfig = {
    iceServers: [
    {   
      urls: [ "stun:stun.exam.ly" ]
    }, 
    {   
      username: "examly",   
      credential: "examly@123",   
      urls: [       
        "turn:turn.exam.ly:80?transport=udp",       
        "turn:turn.exam.ly:3478?transport=udp",       
        "turn:turn.exam.ly:80?transport=tcp",       
        "turn:turn.exam.ly:3478?transport=tcp",       
        "turns:turn.exam.ly:443?transport=tcp",       
        "turns:turn.exam.ly:5349?transport=tcp"   
       ]
     }
   ]
}