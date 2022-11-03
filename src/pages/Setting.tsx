import styled from 'styled-components';

import Navigator from '../components/Navigator';

const Setting = () => {
  return (
    <Container>
      <Navigator />
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

export default Setting;
