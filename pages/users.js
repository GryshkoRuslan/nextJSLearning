import Header from '../components/Header';
import { GlobalStyle } from '../styles/styledItems';

const Users = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>
      <Header />
      <p>This is a users page</p>
    </div>
  </React.Fragment>
);

export default Users;
