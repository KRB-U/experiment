import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 5px;
`;

const CustomSpan = styled.span`
  font-size: 40px;
  color: #333;
  margin-bottom: 10px;
`;

const btnIncDec = styled.button`
  padding: 16px 24px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export { ButtonContainer, CustomSpan, btnIncDec };
