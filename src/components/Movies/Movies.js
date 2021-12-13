import { Link } from "react-router-dom";

const Movies = (props) => {
  return (
    <div className="content">
      <p className="content--p">
        A long time ago, in a galaxy far, far away...
      </p>
      <iframe
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/gZ93V_igqPQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="content--video"
      ></iframe>
      <button className="content--button">
        <Link exact="true" to="/main">
          You may go further away
        </Link>
      </button>
      <button className="content--button">
        <Link exact="true" to="/">
          You may go back
        </Link>
      </button>
    </div>
  );
};

export default Movies;
