import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 10;
    width: 100%;
    padding: 20px 0;
    position: fixed;

    background: ${({isBlack})=>(
        isBlack
        ? '#141414'
        : 'linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 40%, transparent)'
    )};
    transition: background 0.8s;
`
Container.defaultProps = {
    isBlack: true
}

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;

    img {
      width: auto;
      height: 30px;
      margin-right: 5px;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
          font-size: 14px;
          color: #FFF;
          font-weight: 400;
          & + li {
            margin-left: 20px;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
`

export const ProfileItems = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 22px;
    height: 22px;
    color: #FFF;
    margin-right: 30px;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    outline: none;
    border: 0;
    img {
      width: auto;
      height: 30px;
      border-radius: 6px;
      margin-right: 3px;
    }
    > svg {
      width: 15px;
      height: 15px;
      color: #FFF;
    }
  }

`

export default { Container, HeaderItems, ProfileItems }