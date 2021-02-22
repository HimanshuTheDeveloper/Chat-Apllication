import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="ef1f11f0-c886-48de-ae33-54a8705f5d9a"
            userName="Person1"
            userSecret="123456"
        />
    )
}

export default App;