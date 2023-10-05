import { 
   HeaderDefault, 
   Title,
   ClientBar,
   SharedIcon, 
   LoginButton
} from './styles';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
   return(
      <HeaderDefault>
         <Title>
            CodeMoji
         </Title>

         <ClientBar>
            <SharedIcon>
               <MagnifyingGlassIcon />
            </SharedIcon>
            <LoginButton>
               Fazer Login
            </LoginButton>
         </ClientBar>
      </HeaderDefault>
   )
}

export default Header;