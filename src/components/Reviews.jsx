import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../service/api';
import { BsFillPersonFill } from 'react-icons/bs';
import { createImgUrl } from '../utils/ImgUrl';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const review = await getMovieReviews(movieId);
        setReviews(review.results);
      } catch (e) {
        console.log(e.message);
      }
    };
    getReviews();
  }, [movieId]);
  console.log(reviews);
  return (
    <section>
      <ul>
        {reviews.map(({
                        content, id, author, author_details,
                      }) => <li key={id} className="testimonial-box" style={{ marginBottom: '50px' }}>

          <div className="box-top">

            <div className="profile">

              <div className="profile-img">
                {author_details.avatar_path ?
                  <img src={createImgUrl(author_details.avatar_path)}
                       style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="" /> :
                  <BsFillPersonFill
                    style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ffffff' }} />}
              </div>
              <div className="name-user" style={{ marginBottom: '20px' }}>
                <span style={{ fontWeight: 'bold' }}>{'@' + author}</span>
              </div>
            </div>
          </div>
          <div style={{
            width: '0px',
            height: '0px',
            borderBottom: '20px solid white',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            marginLeft: '20px',
            borderTopRightRadius: '10px',
          }}></div>
          <div className="client-comment" style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '20px' }}>
            <p style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxHeight: '115px',
              display: '-webkit-box',
              webkitLineClamp: '3',
              webkitBoxOrient: 'vertical',
            }}>{content.replace(/<[^>]*>?/gm, '')}</p>
          </div>
        </li>)}

      </ul>

      {/*<h1>*/}
      {/*  {reviews.map(({ content, id }) => {*/}
      {/*    return <p key={id}>{content}</p>;*/}
      {/*  })}*/}
      {/*</h1>*/}
    </section>
  )
    ;
};
export default Reviews;
