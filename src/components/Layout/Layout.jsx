import { Outlet} from 'react-router-dom';
import {GlobalStyle} from "../GlobalStyle.styled";
import {Container, Header, List, NavLink} from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </List>
        </nav>
      </Header>
      <Outlet/>
      <GlobalStyle/>
    </Container>


  );
};
export default Layout
