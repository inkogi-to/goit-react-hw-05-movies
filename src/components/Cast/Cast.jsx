import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieCredits} from "../../service/api";
import {createImgUrl} from "../../utils/ImgUrl";
import {Icon, Img, List, ListItem} from "./Cast.styled";

const Cast = () => {
  const {movieId} = useParams()

  const [actors, setActors] = useState([])
  useEffect(() => {

    const getMovieActors = async () => {
      try {
        const res = await getMovieCredits(movieId)
        setActors(res)
      } catch (e) {
        console.log(e.message)
      }
    }
    getMovieActors()
  }, [movieId])
  console.log(actors)

  return (
    <section>
      <List>
        {actors.map(({name, profile_path, id}) => (
          profile_path ?
            <ListItem key={id}>
              <h2>{name}</h2>
              <Img src={createImgUrl(profile_path)} alt={name}/>
            </ListItem>
            :
            <ListItem key={id}>
              <h2>{name}</h2>
              <Icon/>
            </ListItem>

        ))}
      </List>

    </section>
  )
}
export default Cast
