import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieCredits} from "../service/api";

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
  return (
    <section>
      <h1>{actors.map(({original_name},id) => {
        return (<p key={id}>{original_name}</p>)
      })}</h1>
    </section>
  )
}
  export default Cast
