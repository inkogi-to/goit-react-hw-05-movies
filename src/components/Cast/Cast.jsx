import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../service/api';
import { createImgUrl } from '../../utils/ImgUrl';
import { Icon, Img, List, ListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getMovieActors = async () => {
      try {
        const res = await getMovieCredits(movieId);
        setActors(res);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMovieActors();
  }, [movieId]);

  return (<section>
      <List>
        {actors.map(({ name, profile_path, id }) => (<ListItem key={id}>
            <h2 style={{ fontSize: '16px', fontWeight: 'bold',textAlign:'center' }}>{name}</h2>{profile_path ?
            <Img src={createImgUrl(profile_path)} alt={name} style={{ borderRadius: '5px' }} /> :
            <div style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}><Icon /></div>}

          </ListItem>))}
      </List>
    </section>);
};
export default Cast;
