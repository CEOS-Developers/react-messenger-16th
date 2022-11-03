import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../state/userState';

interface IMessage {
  imageSrc?: string;
  username: string;
  text: string | undefined;
  time: string | undefined;
  marginBottom?: string;
  className?: string;
}

const TextArea = styled.div`
  padding: 4px 8px;
  background-color: #efefef;
  border-radius: 10px;
`;

const UserThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
`;

const UserMessage = ({ className, imageSrc, username, text, time, marginBottom }: IMessage) => {
  const userInfos = useRecoilValue(userInfoState);
  const userInfo = userInfos.filter((userInfo) => userInfo.username === username);

  console.log(userInfo);

  return (
    <>
      {/* {userInfo !== username ? ( */}
      <div className={className}>
        <Row gap="4px" marginBottom={marginBottom}>
          <UserThumbnail>
            <img src={imageSrc} alt="프로필 사진" id={username} />
          </UserThumbnail>
          <Column gap="3px" justifyContent="center">
            <span style={{ fontSize: '4px' }}>{username}</span>
            <Row alignItems="end" gap="8px">
              <TextArea>{text}</TextArea>
              <span style={{ fontSize: '12px' }}>{time}</span>
            </Row>
          </Column>
        </Row>
      </div>
      {/* ) : ( */}
      <div className={className}>
        <Row gap="4px" marginBottom={marginBottom}>
          <Column gap="3px" justifyContent="center" alignItems="flex-end">
            <span style={{ fontSize: '4px' }}>{username}</span>
            <Row alignItems="end" gap="8px">
              <span style={{ fontSize: '12px' }}>{time}</span>
              <TextArea>{text}</TextArea>
            </Row>
          </Column>
          <UserThumbnail>
            <img src={imageSrc} alt="프로필 사진" id={username} />
          </UserThumbnail>
        </Row>
      </div>
      {/* )} */}
    </>
  );
};

export default UserMessage;
