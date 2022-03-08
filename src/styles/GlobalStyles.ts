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




export const UploadForm = styled.form`

    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
    
        &:hover {
            opacity: .8;
            color: #fff;
        }
    }


    .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
    }
    .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 0;
        box-sizing: border-box;
        border: 32px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
         transform: rotate(1800deg);
    }
}
`;