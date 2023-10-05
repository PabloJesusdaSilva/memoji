import Buttons from '../Buttons';

import { 
   Container,
   Detail,
   Description,
   MemojiBrimstone,
   MemojiKilljoy,
   MemojiRaze,
   MemojiReyna,
   MemojiYoru
} from './styles';

import Brimstone from '../../assets/Brimstone.png';
import Killjoy from '../../assets/Killjoy.png';
import Raze from '../../assets/Raze.png';
import Reyna from '../../assets/Reyna.png';
import Yoru from '../../assets/Yoru.png';

const Main = () => {
   return(
      <Container>
         <Detail>
            Apple
         </Detail>
         <Description>
            Melhor site para criar memoji. <br />
            Fácil, simples e rápido.
         </Description>

         <Buttons />

         <MemojiBrimstone src={Brimstone} />
         <MemojiKilljoy src={Killjoy} />
         <MemojiRaze src={Raze} />
         <MemojiReyna src={Reyna} />
         <MemojiYoru src={Yoru} />
      </Container>
   );
}

export default Main;