import styled,{keyframes} from 'styled-components';

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

const gradient = keyframes`
  0% {
    background-position: 51% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 51% 0%;
  }
`;


const backgroundColor = {
  green:"linear-gradient( #48c619, #000000);",
  red:"linear-gradient( #a31e17, #000000);",
  yellow:"linear-gradient( #b4b712, #000000);",
  black:"linear-gradient( #48c619, #000000);",
  brown:"linear-gradient( #48c619, #000000);",
  blue:"linear-gradient( #1f2faa, #000000);",
}

export const GrandietWrapper = styled.p`
  display: flex;
  width: 220px;
  height: 300px;
  z-index: 5;
  position: relative;
  background: ${ props => {
    const color = backgroundColor[props.type] ? backgroundColor[props.type] :   "linear-gradient( #a1a4b0, #000000);"
    return color
  }}
  justify-content: center;
  align-items: center;
  background-size: 150% 150%;
  animation: ${gradient} 8s ease infinite;
  transform: scale(0.9);
  transition: all ease 0.6s;

  p{
    font-family: Helvetica !important;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    opacity: 0.5;
    margin-bottom: 5px;
    transition: opacity ease 0.6s;

  }

`

export const Skill = styled.div`
    position: relative;
    height: auto;
    width: 200px;

      &:hover {
        cursor: pointer;
        p {
          opacity: 1;
        }
        > div {
          top: 0;
          left: 10px;
          z-index: 10;
          width: 350px;
          height: 300px;
          transform: scale(1) translateX(90px);
          opacity: 1;
          border-radius: 0 8px 8px 0;
        }
        &:last-child > div {
          transform: scale(1) translateX(-260px);
          border-radius: 8px 0 0 8px;
        }

        &:last-child > .background {
          border-radius:  0 8px 8px 0;
          transform: scale(1) translateX(60px);
        }

        .background{
          border-radius: 8px 0 0 8px;
          transform: scale(1) translateX(-100px);
        }

        img {
          border-radius: 8px 0 0 8px;
          transform: scale(1) translateX(-100px);
        }
      }
`

export const SkillCard = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;
  opacity: 0;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
  height: 270px;
  background: rgba(26, 26, 26, 0.98);
  transition: all ease 0.6s;

  strong {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
  }

`

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;

  span {
    font-size: 20px;

    & + span {
      margin-left: 20px;
    }
    &:nth-child(1) {
      color: #46d369;
      font-weight: 700;
    }
  }
`

export const SkillControll = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    background: #FFF;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    height: 44px;
    padding: 0 30px;
    border: 0;
    transition: all 0.5s;
    svg {
      margin-right: 3px;
    }
    &:hover {
      color: #FFF;
      background: #E50914;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    margin-left: 6px;
    height: 44px;
    width: 44px;
    border-radius: 22px;
    border: 1px solid #FFF;
    background: #141414;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;


export const ButtonLetf = styled.button`
  left: 0;
`
export const ButtonRight = styled.button`
  right: 0;
`

export const relevances = {
  low: "#FF0000",
  mediumLow: "yellow",
  medium: "orange",
  hight: "#46d369"
}

export default { Container, ButtonLetf, ButtonRight, SkillWrapper, Skill, GrandietWrapper, SkillCard, Infos, relevances, SkillControll}