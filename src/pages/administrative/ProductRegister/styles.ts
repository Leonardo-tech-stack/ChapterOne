import styled from "styled-components";
import { lighten } from "polished";
import { colors } from '../../../styles/themes';

export const Flex = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
margin: 4% 0;
margin-left: 10%;

img {
    width: 75%;
    height: 70%;
    margin-left: -25%;
    margin-top: 21%;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 10% 0;
    margin-left: 10%;  
    /* font-size: 1rem; */

    img {
        display: none;
    }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: 10% 0;
    margin-left: 10%;  
    /* font-size: 1rem; */

    img {
        display: none;
    }
}
`;

export const Div = styled.div`
width: 70%;
height: auto;
margin-left: -15%;
margin-right: 5%;
border: 1px solid ${colors.bgButton};
border-radius: 35px;

@media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 95%;
    height: auto;
    margin-right: 12.5%;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    height: auto;
    margin-right: 12.5%;
}

`;

export const Title = styled.h2`
margin: 5% 0% 6% 5%;
font-size: 1.6rem;
font-weight: 500;
`;

export const DiVCadastroProduto = styled.div`
margin: 2%;
border: 1px solid ${colors.bgButton};
border-radius: 35px;
`;

export const Form = styled.form`

label {
    margin: 1% 0;
    margin-left: 5%;
    font-weight: 600;
}

textarea {
    padding: 0.7% 0;
}

input, textarea {
    margin: 2% 0;
    margin-left: 0.5%;
    padding-left: 0.7%;
    height: 3vh;
    width: 80vw;
    font-size: 1rem;
    border: 1px solid ${colors.bgButton};
    border-radius: 5px;
    :focus {
        outline: none;
        box-shadow: 0px 2px 4px #000;
    }
}

input {
    height: 5vh;
}

button {
    padding: 6px 15px;
    margin: 2% 0;
    margin-left: 5%;
    color: white;
    background-color: ${colors.principal};
    border-radius: 30px;

    &:hover {
      transition: 0.5s;
      background-color: ${props => lighten(0.11, colors.principal)};
    }
}

#name {
    width: 38vw;
    margin-left: 5.2%;
}

#description {
    width: 38vw;
    height: 15vh;
    margin-left: 1%;
    font-size: 1rem;
}

#price {
    width: 7vw;
    margin-left: 6%;
}

#inventory {
    width: 7vw;
    margin-left: 3.1%;
}

.textarea-label {
    position: relative;
    top: -75px;
}

.img-label {
    position: relative;
    top: 18px;
}

#images {
    position: relative;
    top: -27px;
    padding-bottom: 6%;
    margin-left: 16%;
    border: none;

    :focus {
        box-shadow: none;
    }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    label {
        margin: 10% 0;
        margin-left: 5%;
    }

    textarea {
        padding: 1%;
    }

    input, textarea {
        margin: 5% 0;
        margin-left: 0.5%;
        padding-left: 1%;
        height: 5vh;
    }

    #name {
        width: 67vw;
        margin-left: 2.8%;
    }

    #description {
        width: 60vw;
        height: 18vh;
        margin-left: 3%;
    }

    #price {
        width: 20vw;
    }

    #inventory {
        width: 20vw;
    }

    .textarea-label {
        top: -75px;
    }

    .img-label {
        top: -15px;
    }

    #images {
        position: relative;
        top: 0;
        left: -30px;
        padding-bottom: 14%;
    }

    .img {
        display: flex;
    }

    .register {
        display: flex;
        justify-content: end;
        
        button {
            margin: 0;
            margin-right: 5%;
            margin-bottom: 7%;
        }
    }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.3rem;

    label {
        margin: 10% 0;
        margin-left: 5%;
    }

    textarea {
        padding: 1%;
    }

    input, textarea {
        font-size: 1.3rem;
        margin: 3% 0;
        margin-left: 0.5%;
        padding-left: 1%;
        height: 4vh;
    }

    #name {
        width: 67vw;
        margin-left: 2.8%;
    }

    #description {
        width: 60vw;
        height: 18vh;
        font-size: 1.3rem;
        margin-left: 3%;
    }

    #price {
        width: 20vw;
    }

    #inventory {
        width: 20vw;
    }

    .textarea-label {
        top: -120px;
    }

    .img-label {
        top: -15px;
    }

    #images {
        position: relative;
        top: 25px;
        left: -55px;
        padding-bottom: 14%;
    }

    .img {
        display: flex;
        justify-content: center;
        white-space: nowrap;
    }

    .register {
        display: flex;
        justify-content: end;
        
        button {
            font-size: 1.3rem;
            margin: 0;
            margin-right: 5%;
            margin-bottom: 7%;
        }
    }
}

`;