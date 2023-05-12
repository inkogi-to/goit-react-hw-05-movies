import {Link} from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io';

import {Image, Info, List, ListItem, Title, ToBack} from "./CardMovie.styled";


const CardMovie = ({refLocation, posterImg, filmTitle, description, genres, dateRelease}) => {
  console.log(genres)
  return (
    <main>
      <ToBack to={refLocation}>{<IoMdArrowRoundBack style={{verticalAlign: 'middle'}}/>}Back</ToBack>
      <Info>
        <List>
          <ListItem>
            <Title>{filmTitle}({dateRelease})</Title>
          </ListItem>
          <ListItem>
            <h3>Overview</h3>
            <p>{description}</p>
          </ListItem>
          <ListItem>
            <h4>Genres</h4>
            <p>{genres}</p>
          </ListItem>
        </List>
        <div>
          <Image src={posterImg} alt={filmTitle}/>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </Info>
    </main>

  )
}
export default CardMovie
