import styled from 'styled-components';
import { Link } from 'react-router'; 

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
  padding: 1rem;
  box-sizing: border-box;
`;

export const FormCard = styled.form`
  background-color: rgba(10, 5, 25, 0.3); 
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.08);

  padding: 2rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%; 
  max-width: 350px; 
  //border: 2px solid #4A2399;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
  color: #FFFFFF;
  font-size: 1.6rem; 
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: #E6B43C;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #E6B43C;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%; 
  box-sizing: border-box; 
`;

export const Button = styled.button`
  background: #22D57F;
  color: #FEFFFE;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) { background: #19A85F; }
`;

export const ErrorMessage = styled.p`
  color: #B71813;
  font-weight: bold;
  text-align: center;
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  color: #E6B43C;
  text-decoration: none;
  font-weight: bold;
  &:hover { text-decoration: underline; }
`;

export const RegisterText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #ffffff;
`;