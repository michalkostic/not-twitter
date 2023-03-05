import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../messages/messages";


function NewMessagePage() {    
    const navigate = useNavigate();
    const messageText = useRef(null);

    function publishNewMessage() {    
        addMessage({
            "id": crypto.randomUUID(),
            "avatar": "images/person-circle.svg",
            "text": messageText.current.value
        });
        navigate("/");
    }
    
    

    return (<>
        <div className="row">
            <div className="col">
                <textarea 
                ref={messageText} 
                id="message-text"></textarea>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" 
                onClick={publishNewMessage}>Submit</button>
            </div>
        </div>
    </>);
}

export default NewMessagePage;