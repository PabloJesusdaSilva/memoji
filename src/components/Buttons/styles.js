import styled from 'styled-components';

export const BoxButtons = styled.div `
   display: flex;
   gap: 0 50px;

   @media (max-width: 620px) {
      flex-direction: column;
   }
`

export const CreateMemoji = styled.button `
   padding: 10px 34px;
   text-align: center;
   border-radius: 6px;
   border: none;
   font-size: 18px;
   font-weight: 600;
   text-transform: uppercase;
   cursor: pointer;
   background-color: #6610F2;
   color: #FFF;
   
   @media (max-width: 620px) {
      padding: 12px 100px;
   }
`

export const ViewLibrary = styled.button `
   padding: 10px 34px;
   text-align: center;
   border-radius: 6px;
   border: 2px solid #EAEAEA;
   font-size: 18px;
   font-weight: 600;
   text-transform: uppercase;
   cursor: pointer;
   background-color: #FFF;
   color: #2A2A2A;
   
   @media (max-width: 620px) {
      padding: 17px 150px;
      margin-top: 10px;
   }
`