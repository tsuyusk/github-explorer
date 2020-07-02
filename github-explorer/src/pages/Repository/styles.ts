import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 790px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;
    svg {
      margin-right: 4px;
    }
    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
        word-wrap: break-word;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        word-wrap: break-word;
      }
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        font-size: 16px;
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }

    @media screen and (max-width: 500px) {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d64;
    }

    p {
      font-size: 16px;
      font-size: A8A8B3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbff;
  }
`;
