import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0;
    position: relative;


    > button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      z-index: 9;
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
  width: 310px;
  height: 180px;
  position: relative;
  background: ${ props => {
    const color = backgroundColor[props.type] ? backgroundColor[props.type] :   "linear-gradient( #a1a4b0, #000000);"
    return color
  }};
  justify-content: center;
  align-items: center;
  margin: 10px;
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

    &:hover {
      z-index: 8;
      cursor: pointer;
      p { opacity: 1; }
      
      .background-card{
        height: 180px;
        transform: scale(1.40) translateY(-50px);
        border-radius: 5px 5px 0 0;
        
      }
      .skill-card{
          top: 140px;
          opacity: 1;
          height: 80%;
          transform: scale(1.40);
          border-radius: 0 0 5px 5px;
      }
    }

`

export const SkillCard = styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  width: 94%;
  height: 100%;
  background: rgba(26, 26, 26, 1);
  transition: all ease 0.6s;
  strong {
    padding: 5px;
    font-size: 20px;
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
  justify-content: center;
  padding: 10px;
  span {
    font-size: 20px;
    font-weight: 400;

    & + span {
      margin-left: 20px;
    }
   
  }
`

export const SkillControll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  button {
    display: flex;
    align-items: center;
    background: #FFF;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    height: 35px;
    padding: 0 20px;
    border: 0;
    transition: all 0.5s;
    svg {
      margin-right: 10px;
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
    height: 35px;
    width: 35px;
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

export default { 
    Container,
    ButtonLetf,
    ButtonRight, 
    SkillWrapper, 
    Skill,
    GrandietWrapper, 
    SkillCard, 
    Infos, 
    relevances, 
    SkillControll}