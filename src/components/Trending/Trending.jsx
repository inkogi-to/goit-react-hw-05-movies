import {FcFilmReel} from 'react-icons/fc';

import {List, ListItem, Main, Title, NavLink, Span} from "./Trending.styled";


const Trending = ({movies}) => {
  return (
    <Main>
      <Title>Trending today</Title>
      <List>
        {movies.map(({id, title, vote_average}) => (
          <ListItem key={id}>
            <FcFilmReel size={30} style={{verticalAlign: "sub"}}/>
            <NavLink to={`movies/${id}`}>{title}</NavLink>
            <Span>{`${vote_average}`.slice(0,3).padEnd(2,'.').padEnd(3,'0')}</Span>
          </ListItem>))}
      </List>
    </Main>
  )
}
export default Trending
