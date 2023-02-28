import logo from './logo.svg';
import './App.css';
import { getMessages, addMessage } from './messages/messages';
import { useEffect, useState } from 'react';

function Message(props) {
  return (
  <div className="row XXX">    
    <div className="col-1">
      <div className="card__profile-pic p-1">
        <img src={props.message.avatar} width="100%"></img>
      </div>
    </div>
    <div className="col">
      <div className="card__text py-3">
        { props.message.text }
      </div>
    </div>
  </div>
  )
}

function EmptyMessageList() {
  return <div className="row">
          <div className="col">
            <div className="card__text py-3">
                No messages yet
            </div>
          </div>
        </div>;
}

function MessageList({messages}) {
  let messageList = messages.map((message) => <Message key={message.id} message={message}></Message>);
  let emptyMessageList =  <EmptyMessageList></EmptyMessageList>;  

  return messageList.length>0 ? messageList : emptyMessageList;
}

function MessageListPage({messages}) {
  return (
    <div className="container">
      <div className="row mt-3">
          <div className="col-4">
                  <div className="h3">Not Twitter</div>
          </div>
          <div className="col-1 ms-auto mr-1">
                  <div>Unread <span className="message-count">{messages.length}</span></div>
          </div>
      </div>

      <MessageList messages={messages}></MessageList>

      <div className="row">
        <div className="col-1 ms-auto">
          <a className="btn btn-primary" href="new-message.html" role="button">
            +
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {  
  const [messages, setMessages] = useState([]);

  // periodically refresh
  useEffect(() => {
    setMessages(getMessages());
    const fetchMessagesInterval = setInterval(() => {
      setMessages(getMessages());
    }, 1000);
    return () => clearInterval(fetchMessagesInterval);
  }, []);

  return <MessageListPage messages={messages}></MessageListPage>
}

export default App;
