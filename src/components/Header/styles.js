import styled from "styled-components";

export const HeaderDefault = styled.header `
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   height: 80px;
   font-family: 'Lora', serif;
`

export const Title = styled.h1 `
   font-size: 32px;
   font-weight: 700;
   color: #2F2F2F;
`

export const ClientBar = styled.div `
   display: flex;
   justify-content: space-around;
`

export const SharedIcon = styled.div `
   width: 20px;
   height: 20px;
   margin: 2px 15px 0 0;
   padding: 6px;
   border-radius: 50%;
   border: 1px solid #EAEAEA;
   font-size: 12px;
   color: #2F2F2F;
`

export const LoginButton = styled.button `
   padding: 10px 30px;
   border-radius: 100px;
   border: 2px solid #EAEAEA;
   text-transform: uppercase;
   background-color: #FFF;
   color: #2F2F2F;
`

