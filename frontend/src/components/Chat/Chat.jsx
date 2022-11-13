import io from 'socket.io-client';
import { useEffect, useState } from 'react';


const socket = io.connect('http://localhost:5000');

function Chat() {

  const [message, setMessage] = useState('');
  const [room,setRoom] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  
  const sendMessage = () => {
    socket.emit('send_message', message);
    setMessage('');
    alert('You\'ve sent a message');
  }
  
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  useEffect(() =>{
    let answer = '';
    socket.on('receive_message', (allMessages) => {
      setAllMessages(allMessages);
      alert('New message!')
    })
  }, [socket])

  const joinRoom = (e) => {
    socket.emit('join_room', room);
    alert('Succesfully joined the room, ID:'+ ' ' + room);
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='Room ID...' onChange={(e) => setRoom(e.target.value)}/>
        <button onClick={joinRoom}>Join</button>
      </div>
      <input type="text" placeholder='Message...' onChange={onMessageChange} value={message}/>
      <button onClick={sendMessage}>Send</button>
      { allMessages.map(msg => <p>{msg}</p>) }
    </div>
  );
}

export default Chat;
