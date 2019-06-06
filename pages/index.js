import Header from '../components/Header';
import { GlobalStyle } from '../styles/styledItems';

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>
      <Header />
      <p>This is a home page</p>
    </div>
  </React.Fragment>
)

export default Index;
