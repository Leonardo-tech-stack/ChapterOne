import styled from "styled-components";
import { lighten } from "polished";
import { colors } from "../../styles/themes";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 53.800rem;
  max-height: 90vh;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 90vw; 
    max-height: 90vh;
  }

`;

export const Div = styled.div`
font-size: 1.2rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
        
  table {
    background-color: ${colors.fundo};
    border: 1px solid ${colors.bgButton};
    thead {
      tr {
        background-color: ${colors.titulo};
        border-bottom: 1px solid ${colors.bgButton};
        th {
          padding: 10px 70px;
          white-space: nowrap;
        }
      }
    }

    tbody {
      tr {
        .name {
          padding-left: 0;
        }

        .price {
          padding-left: 10%;
        }
        
        td {
          white-space: nowrap;
          font-weight: 500;
          padding: 1% 12%;
          padding-left: 4%;
          border-bottom: 1px solid ${colors.bgButton};

          img {
            padding: 20%;
            border-radius: 25%;
          }

          button {
            &:hover {
              text-decoration: underline;
              text-shadow: 0px 2px 2px #c4c4c4;
            }
          }

          .total {
            padding: 1%;
            padding-left: 50px;
          }
        }
      }
    }
  }

  button {
    font-weight: 500;
    margin-top: 20px;
    padding: 8px 16px;
    background-color: ${colors.principal};
    color: white;
    border: none;
    border-radius: 4px;

    &:hover {
      transition: 0.5s;
      background-color: ${props => lighten(0.11, colors.principal)};
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 2%;
    }

    table {
      width: 100%;
      font-size: 0.9rem;
      thead {
        tr {
          th {
            padding: 5px;
          }
        }
      }

      tbody {
        tr {
          .image {
            padding-left: 1%;
            border-right: 1px solid ${colors.bgButton};
          }

          .name {
            border-right: 1px solid ${colors.bgButton};
            padding-left: 3%;
            max-width: 40%; 
            white-space: normal; 
          }

          .price {
            border-right: 1px solid ${colors.bgButton};
            padding-left: 2%;
          }

          img {
            border-radius: 45px;
            padding: 35px;
          }

          .total {
            display: none;
          }
          
          td {
            max-width: 120px;
            padding: 10px 5px;
            padding-left: 5px;
          }
        }
      }
    }

    .close {
      display: flex;
      justify-content: end;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 2%;
    }

    p {
      font-size: 1.2rem;
    }

    table {
      width: 100%;
      font-size: 1.2rem;
      margin-top: 2%;
      thead {
        tr {
          th {
            padding: 5px;
          }
        }
      }

      tbody {
        tr {
          .image {
            padding-left: 1%;
            border-right: 1px solid ${colors.bgButton};
          }

          .name {
            border-right: 1px solid ${colors.bgButton};
            padding-left: 3%;
            max-width: 40%; 
            white-space: normal; 
          }

          .price {
            border-right: 1px solid ${colors.bgButton};
            padding-left: 2%;
          }

          img {
            border-radius: 45px;
            padding: 35px;
          }

          .total {
            display: none;
          }
          
          td {
            max-width: 120px;
            padding: 10px 5px;
            padding-left: 25px;
          }
        }
      }
    }

    .close {
      display: flex;
      justify-content: end;

      button {
        font-size: 1.3rem;
      }
    }
  }

`;