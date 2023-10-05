import { 
   BoxButtons,
   CreateMemoji,
   ViewLibrary
} from './styles';

const Buttons = () => {
   return (
      <BoxButtons>
         <CreateMemoji>
            Criar Memoji
         </CreateMemoji>
         <ViewLibrary>
            Ver biblioteca
         </ViewLibrary>
      </BoxButtons>
   );
}

export default Buttons;