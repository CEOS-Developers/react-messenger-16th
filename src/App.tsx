import React, { useState } from 'react';
import InputForm from './components/InputMessage';
import styled from 'styled-components';
import { text } from 'stream/consumers';
import MessageChatForm from './components/MessageChatForm';

import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import useInput from './hooks/useInput';
import useChatRoom from './hooks/useChatRoom';
import { useEffect } from 'react';
import { chatRoomState } from './atom';

function App() {
  const { addMsg, toggleAccount } = useChatRoom();
  const chatRoom = useRecoilValue(chatRoomState);
  useEffect(() => {
    console.log(chatRoom);
  }, [chatRoom]);

  const onCLickMe = (): void => {
    toggleAccount(0);
  };
  const onCLickYou = (): void => {
    toggleAccount(1);
  };
  return (
    <AllTemplate>
      <MessageChatForm />
      <InputForm sendMsg={addMsg} />
      <ImgProfAll>
        <ImgProf
          onClick={onCLickMe}
          src="data:image/jpeg;base64,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"
        ></ImgProf>
        <ImgProf
          onClick={onCLickYou}
          src="https://blog.kakaocdn.net/dn/dowIkh/btrdtJZG3Eh/74NuD1tiFw7QzhqxOZ2Po0/img.png"
        ></ImgProf>
      </ImgProfAll>
    </AllTemplate>
  );
}

const AllTemplate = styled.div`
  width: 350px;
  height: 660px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  justify-content: center;
  align-items: center;
`;

const ImgProfAll = styled.section`
  display: flex;
  flex-direction: row;
`;
const ImgProf = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 25px;
`;

export default App;
