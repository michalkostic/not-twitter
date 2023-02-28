import logo from './logo.svg';
import './App.css';
import { getMessages, addMessage } from './messages/messages';
import { cloneElement, useEffect, useState } from 'react';

function App({children}) {  
  const [messages, setMessages] = useState([]);

  // periodically refresh
  useEffect(() => {
    setMessages(getMessages());
    const fetchMessagesInterval = setInterval(() => {
      setMessages(getMessages());
    }, 1000);
    return () => clearInterval(fetchMessagesInterval);
  }, []);

  return cloneElement(children, {"messages": messages});
}

export default App;
