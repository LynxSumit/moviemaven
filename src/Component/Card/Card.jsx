import { useState, useEffect } from "react";
import "./Card.style.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import MovieMaven from "../../Assests/Movie Maven.png"

const Card = ({ movie }) => {
  const navigate = useNavigate()
  const {id} = movie;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards" key={id} >
            <img
              className="cards__img"
              src={movie.backdrop_path ?   `https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }` : MovieMaven}
              alt="movie_img"
            />
            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">{movie? movie.vote_average : ""}    <i className="fas fa-star" /></span>
              </div>
              <div className="card__description">
                {movie ?  movie.overview : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
