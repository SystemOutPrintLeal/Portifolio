import styled from 'styled-components';
import BackgroundUrl from '../../assets/background_featured.png'

export const Container = styled.div`
  flex: 1;
`;

export const FeaturedBackground = styled.div`
  
  background-color: blue;
  background-image: url(${BackgroundUrl});
  background-size: cover;
  background-position: center;
  height: 100vh;

  > div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent);
  }
`;

export const InsindeFeatured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 150px 0 200px 40px;

  width: inherit;
  height: inherit;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4) 40%,
    transparent 60%
  );

  h1 {
    font-size: 40px;
    margin-bottom: 30px;
  }

  p {
    width: 500px;
    font-size: 17px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;
 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > span {
    font-size: 14px;
    color: #b9bbbe;
    margin-bottom: 20px;
  }

`

export const InsindeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;

  span {
    font-size: 13px;
    & + span {
      margin-left: 20px;
    }
    &:nth-child(1) {
      color: #46d369;
      font-weight: 700;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 9px 25px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 13px;
    svg {
      width: 15px;
      height: 15px;
      margin-right: 0.8rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ButtonPlay = styled.a`
  background: #FFF;
  color: #000;
  margin-right: 0.8rem;
`


export const ButtonAbout = styled.a`
  background: rgba(109, 109, 110, 0.7);
`
export default {Container, FeaturedBackground, InsindeFeatured, InsindeInfo, Buttons, ButtonPlay, ButtonAbout}