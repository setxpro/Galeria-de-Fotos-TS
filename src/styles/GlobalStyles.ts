import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    * {
        box-sizing: border-box;
        padding:0;
        margin: 0;
        font-family: 'Nunito', sans-serif;
    }
`;

export const Container = styled.div`
    background-color: #27282F;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }

`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
