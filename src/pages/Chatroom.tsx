import { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import ChatList from "../components/chatroom/ChatList";
import InputForm from "../components/chatroom/InputForm";
import UserList from "../components/chatroom/UserList";
import { getRoomMembers } from "../common/customHooks";
import { Chat } from "../common/interface";

import userData from "../data/userData.json";
import chatData from "../data/chatData.json";
import { useNavigate, useParams } from "react-router-dom";

function Chatroom() {
  const navigate = useNavigate();

  const { id } = useParams<string>();
  const roomId: number = parseInt(id!);

  const curRoom = chatData.rooms[roomId];
  const [chats, setChats] = useState<Chat[]>(curRoom.chats);
  const users = userData.users;

  const [curUser, setCurUser] = useState(0);
  const nextChatId = useRef(chats.length + 1);

  const onConcat = useCallback(
    (text: string) => {
      const chat = {
        id: nextChatId.current,
        senderId: curUser,
        text,
        date: String(new Date()),
      };
      setChats(chats.concat(chat));
      nextChatId.current++;
    },
    [chats, curUser]
  );

  const changeUser = (id: number) => {
    setCurUser(id);
  };

  const roomMembers = getRoomMembers(roomId, true);

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)} />
      <UserList curUser={curUser} users={roomMembers} changeUser={changeUser} />
      <ChatList curUser={curUser} users={users} chats={chats} />
      <InputForm onConcat={onConcat} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Chatroom;
