import { List, ListItem, Main, Title, NavLink, Icon } from './Trending.styled';

const Trending = ({ movies }) => {
  return (
    <Main>
      <Title>Trending today</Title>
      <List>
        {movies.map(({ id, title, vote_average }) => (
          <NavLink key={id} to={`movies/${id}`}>
            <Icon />
            <ListItem>
              {title}
              <span>{vote_average.toString().slice(0, 3)}</span>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Main>
  );
};
export default Trending;
