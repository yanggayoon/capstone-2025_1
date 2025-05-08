import React, { useState } from 'react';
import BackTitle from '../components/menu/BackTitle';
import InputBox from '../components/menu/InputBox';
import styles from '../styles/scan/Chat.module.css';
import { LuScanLine } from "react-icons/lu";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`${styles['message-container']} ${isUser ? styles['message-container-user'] : styles['message-container-system']}`}>
      <div className={`${styles['message-content']} ${isUser ? styles['message-content-user'] : styles['message-content-system']}`}>
        <p className={styles['message-text']}>{message.text}</p>
      </div>
    </div>
  );
};

const ChatBox = ({ messages }) => {
  if (messages.length === 0) {
    return (
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#444',
      }}>
        <LuScanLine style={{ fontSize: "48px", color: "#66955A", margin: "128px 0 24px 0" }} />
        <div style={{ textAlign: 'center', fontSize: "16px" }}>
          스캔 버튼을 눌러 재활용품을 인식하거나,<br />
          아래 입력창에 궁금한 점을 질문해보세요!
        </div>
      </div>
    );
  }
  return (
    <div className={styles['chatBox-container']} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} isUser={message.isUser} />
      ))}
    </div>
  );
};

function ChatPage() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (text) => {
    const newMessage = {
      text: text,
      isUser: true
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
    <div className={styles['page-container']}>
      <BackTitle title="재활용 AI 챗봇" />
      <ChatBox messages={messages} style={{  }}/>
      <InputBox onSendMessage={handleNewMessage} />
    </div>
  );
}

export default ChatPage;