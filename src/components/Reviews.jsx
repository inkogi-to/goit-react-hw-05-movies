import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieReviews} from "../service/api";

const Reviews = () => {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const review = await getMovieReviews(movieId)
        setReviews(review.results)
      } catch (e) {
        console.log(e.message)
      }
    }
    getReviews()
  }, [movieId])
  console.log(reviews)
  return (
    <section>
      <h1>{reviews.map(({content,id})=>{
        return (<p key={id}>{content}</p>)
      })}</h1>
    </section>
  )
}
export default Reviews
