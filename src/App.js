
// https://www.youtube.com/watch?v=jcOKU9f86XE Chat Application using React JS


import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './app.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />



    return (
        <ChatEngine
           height="100vh"
           projectID="d964c012-5ec4-46eb-bbed-2c33885503f5"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatappProps) => <ChatFeed {...chatappProps} />}
        />
    );
}

export default App;