import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

import {
   Content
} from './styles';

const Home = () => {
   return(
      <Content>
         <Header />
         <Main />
         <Footer />
      </Content>
   );
}

export default Home;