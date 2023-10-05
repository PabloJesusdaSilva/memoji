import styled from 'styled-components';

export const MyFooter = styled.footer `
   display: flex;
   width: 70%;
   height: 200px;
   gap: 0 130px;
   margin-top: 300px;
   padding: 40px 70px ;
   border-radius: 10px;
   box-shadow: 0 0 10px #F2F2F2;
   background-color: #F2F2F2;

   @media (max-width: 620px) {
      flex-direction: column;
      width: 100%;
      height: auto;
      margin-top: 100px;
      padding: 40px 40px 0 ;
   }
`

export const DescriptionFooter = styled.div `
   display: flex;
   flex-direction: column;

   @media (max-width: 620px) {
      padding-left: 20px;
   }
`

export const Title = styled.h4 `
   padding-left: 8px;
   border-left: 4px solid #6610F2;
   font-family: Lora;
   font-size: 20px;
   font-weight: 600;
   text-transform: uppercase;
   color: #2F2F2F;
`

export const Description = styled.p `
   width: 400px;
   font-family: 'Inter', sans-serif;
   font-style: italic;
   line-height: 26px;
   font-weight: 500;
   color: #2F2F2F;

   @media (max-width: 620px) {
      width: 380px;
   }
`