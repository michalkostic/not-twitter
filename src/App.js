import logo from './logo.svg';
import './App.css';
import { getMessages, addMessage } from './messages/messages';
import { cloneElement, useEffect, useState } from 'react';

function App({children}) {  
  const [messages, setMessages] = useState([]);

  // periodically refresh
  useEffect(() => {
    getMessages().then(
      (messages) => setMessages(messages)
    );

    const fetchMessagesInterval = setInterval(() => {
        getMessages().then(
          (messages) => setMessages(messages)
        );
      }, 10000);
    return () => clearInterval(fetchMessagesInterval);
  }, []);

  return cloneElement(children, {"messages": messages});
}

export default App;
