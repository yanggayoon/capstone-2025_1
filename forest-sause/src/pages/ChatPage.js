import React, { useState } from 'react';
import BackTitle from '../components/menu/BackTitle';
import CameraButton from '../components/menu/CameraButton';
import styles from '../styles/scan/Chat.module.css';

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
  return (
    <div className={styles['chatBox-container']}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} isUser={message.isUser} />
      ))}
    </div>
  );
};

function ChatPage() {
  const [messages] = useState([
    {
      text: "파프리카",
      isUser: true,
    },
    {
      text: "파프리카 달걀찜\n\n재료: 파프리카(빨강, 노랑, 초록), 달걀 2개, 우유 2큰술, 소금, 후추\n\n1. 파프리카 윗부분을 잘라 속을 비운다.\n2. 달걀, 우유, 소금, 후추를 넣고 잘 풀어준다.\n3. 파프리카 속에 달걀물을 채운 후, 전자레인지에 2~3분 돌리거나 찜기에 10분간 쪄준다.",
      isUser: false
    },
  ]);

  return (
    <div className={styles['page-container']}>
      <BackTitle title="scanner chat" />
      <ChatBox messages={messages} />
      <CameraButton />
    </div>
  );
}

export default ChatPage;