import Header from '../components/chatting/header';
import Content from '../components/chatting/content';
import Input from '../components/chatting/input';
import Box from '../components/box/box';
import { useParams } from 'react-router-dom';

const Chatting = (props: any) => {
  return (
    <Box>
      <Header />
      <Content />
      <Input />
    </Box>
  );
};

export default Chatting;
