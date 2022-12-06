import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 10;
    width: 100%;
    padding: 20px 40px;
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

export default { Container, HeaderItems }