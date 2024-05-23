import { IoMdArrowRoundBack } from 'react-icons/io';

import {
  Btn,
  DetailItems,
  DetailList,
  Image,
  Info,
  List,
  ListItem,
  Title,
  ToBack,
} from './CardMovie.styled';
// import { createImgUrl } from '../../utils/ImgUrl';

const CardMovie = ({
                     refLocation,
                     posterImg,
                     filmTitle,
                     description,
                     genres,
                     dateRelease,
                     production_companies

                   }) => {
  console.log(production_companies);
  return (
    <main>
      <ToBack to={refLocation}>
        {<IoMdArrowRoundBack style={{ verticalAlign: 'middle' }} />}Back
      </ToBack>
      <Info>
        <div>
          <Image src={posterImg} alt={filmTitle} width="400px" height="600px" />
          <DetailList>
            <DetailItems>
              <Btn to="cast">Cast</Btn>
            </DetailItems>
            <DetailItems>
              <Btn to="reviews">Reviews</Btn>
            </DetailItems>
          </DetailList>
        </div>
        <List>
          <ListItem>
            <Title>
              {filmTitle}({dateRelease})
            </Title>
          </ListItem>
          <ListItem>
            <h3>Overview</h3>
            <p>{description}</p>
          </ListItem>
          <ListItem>
            <h4>Genres</h4>
            <p>{genres}</p>
          </ListItem><ListItem>
            <h4>Production</h4>

            {/*<img src={createImgUrl(production_companies)} alt='logo'/>*/}
          </ListItem>
        </List>
      </Info>
    </main>
  );
};

export default CardMovie;
