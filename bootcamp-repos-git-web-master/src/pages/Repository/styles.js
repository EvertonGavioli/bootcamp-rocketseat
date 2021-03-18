import styled, { keyframes, css } from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg)
}

to {
  transform: rotate(360deg)
}
`;

export const StateFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;

  position: relative;

  strong {
    font-size: 16px;
    color: #333;
    margin-left: 10px;
  }

  ${props =>
    props.loadingissue &&
    css`
      svg {
        position: absolute;
        left: 0;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const IssueButton = styled.button.attrs(props => ({
  disabled: props.loadingissue,
}))`
  margin-left: 20px;
  width: 100px;
  padding: 4px 0;
  border-style: none;
  font-size: 12px;
  font-weight: bold;
  background-color: ${props => (props.selected ? '#7159c1' : '#999')};
  color: #fff;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const IssueList = styled.ul`
  margin-top: 20px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  button {
    padding: 5px 20px;
    border-style: none;
    font-size: 14px;
    font-weight: bold;
    background-color: #7159c1;
    color: #fff;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
