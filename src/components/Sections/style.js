import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0;

    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;

    h1 {
        z-index: 7;
      }

      > button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: 6;
        background: rgba(20, 20, 20, 0.8);
        border: 0;
        svg {
          width: 40px;
          height: 40px;
          color: #fff;
        }
        visibility: hidden;
        &:hover {
          svg {
            width: 45px;
            height: 45px;
          }
        }
      }
`
export const ButtonLetf = styled.button`
  left: 0;
`;
export const ButtonRight = styled.button`
  right: 0;
`;

export default { Container, ButtonLetf, ButtonRight }