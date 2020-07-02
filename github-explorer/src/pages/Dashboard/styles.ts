import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface IFormProps {
  hasError: boolean;
}

const shake = keyframes`
  0% {
    transform: translateX(0px);
  }

  10%, 20% {
    transform: translateX(1px);
  }

  40%, 50% {
    transform: translateX(2px);
  }

  70%, 80% {
    transform: translateX(-1px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<IFormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  ${props =>
    props.hasError &&
    css`
      animation: ${shake} 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
    `}

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: #fff solid 2px;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    ${props =>
      props.hasError &&
      css`
        background-color: #c53030;
      `}

    transition: backgrond-color 0.2s;
    &:hover {
      background: ${props =>
        props.hasError ? shade(0.2, '#c53030') : shade(0.2, '#04d361')};
    }
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    input {
      flex: none;
      height: 70px;
      border-radius: 5px 5px 0 0;
    }
    button {
      width: 100%;
      height: 70px;
      border-radius:0 0 5px 5px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d64;
      word-wrap: break-word;
    }

    p {
      font-size: 16px;
      font-size: A8A8B3;
      margin-top: 4px;
      word-wrap: break-word;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbff;
  }
`;

/**
 * margin-left: auto -> Pega todo o espaço disponivel e usa como margin;
 * &::placeholder -> placeholder de um input
 * Icons são sempre svg
 * a + a -> todo a precedido de a
 * x + y <- todo y precedido de x
 * border radius -> cima-esquerda cima-direita baixo-direita baixo-esquerda
 *  > 5px 0 0 5px -> apenas na lateral esquerda
 *  > 0 5px 5px 0 -> apenas na lateral direita
 */
