import styled from 'styled-components';

const ContainerStock = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #71c159;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default ContainerStock;
