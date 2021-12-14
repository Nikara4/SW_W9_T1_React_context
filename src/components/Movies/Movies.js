const Movies = (props) => {
  return (
    <div className="movies">
      <p className="movies--p">A long time ago, in a galaxy far, far away...</p>
      <iframe
        width="600"
        height="338"
        src="https://www.youtube.com/embed/gZ93V_igqPQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="movies--video"
      ></iframe>
    </div>
  );
};

export default Movies;
