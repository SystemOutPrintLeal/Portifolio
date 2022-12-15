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

      &:hover {
        button {
          visibility: visible;
        }
      }
`

export const SkillWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: margin-left 1s;
`

export const Skill = styled.div`
    position: relative;
    height: auto;
    width: 200px;

    img {
        position: relative;
        z-index: 5;
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.6s;
      }

      &:hover {
        cursor: pointer;
        > div {
          top: 0;
          left: 10px;
          z-index: 10;
          width: 400px;
          height: 300px;
          transform: scale(1) translateX(90px);
          opacity: 1;
          border-radius: 0 8px 8px 0;
        }
        img {
          border-radius: 8px 0 0 8px;
          transform: scale(1) translateX(-100px);
        }
      }
`

export const ButtonLetf = styled.button`
  left: 0;
`
export const ButtonRight = styled.button`
  right: 0;
`

export default { Container, ButtonLetf, ButtonRight, SkillWrapper, Skill }