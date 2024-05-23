import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle.styled';
import {
  Container,
  Header,
  List,
  LogoLink,
  LogoMovie,
  NavLink,
} from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
          <LogoMovie />
          FilmUA
        </LogoLink>
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

      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>

      <GlobalStyle />
    </Container>
  );
};
export default Layout;
