import styled from 'styled-components';

export const Container = styled.main `
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   width: 100%;
   margin-top: 20px;
   font-family: 'Inter', sans-serif;
`

export const Detail = styled.span `
   position: absolute;
   top: 70px;
   font-size: 22px;
   font-weight: 600;
   color: #2F2F2F;
`

export const Description = styled.p `
   margin-top: 114px;
   width: 700px;
   text-align: center;
   font-family: 'Lora', serif;
   font-size: 56px;
   line-height: 70px;
   color: #2F2F2F;

   @media (max-width: 620px) {
      width: 430px;
   }
`

export const MemojiBrimstone = styled.img `
   position: absolute;
   top: 12%;
   right: 10%;
   width: 150px;

   @media (max-width: 620px) {
      display: none;
   }
`

export const MemojiKilljoy = styled.img `
   position: absolute;
   top: 8%;
   left: 10%;
   width: 150px;

   @media (max-width: 620px) {
      display: none;
   }
`

export const MemojiRaze = styled.img `
   position: absolute;
   top: 110%;
   width: 150px;

   @media (max-width: 620px) {
      display: none;
   }
`

export const MemojiReyna = styled.img `
   position: absolute;
   top: 83%;
   right: 10%;
   width: 150px;

   @media (max-width: 620px) {
      display: none;
   }
`

export const MemojiYoru = styled.img `
   position: absolute;
   top: 87%;
   left: 12%;
   width: 150px;

   @media (max-width: 620px) {
      display: none;
   }
`