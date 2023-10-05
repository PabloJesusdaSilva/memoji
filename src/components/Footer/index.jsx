import {
   MyFooter,
   DescriptionFooter,
   Title,
   Description
} from './styles';

const Footer = () => {
   return(
      <MyFooter>
         <DescriptionFooter>
            <Title>
               Bill Gates
            </Title>
            <Description>
               “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”
            </Description>
         </DescriptionFooter>

         <DescriptionFooter>
            <Title>
               Steve Jobs
            </Title>
            <Description>
               “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”
            </Description>
         </DescriptionFooter>
      </MyFooter>
   );
}

export default Footer;