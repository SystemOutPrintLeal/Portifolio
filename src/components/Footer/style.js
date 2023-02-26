import styled from 'styled-components';

export const Container = styled.footer`
    max-width: 1300px;
    margin: auto;
    padding: 70px 56px;


    .footer-title{
        font-size: 20px;
        color: #757575;
        margin-bottom: 50px;
    }
`
export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 10px;
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 20px 0 20px;

    >div{
        color: #757575;
        margin-bottom: 20px;
        font-size: 16px;
    }

`
