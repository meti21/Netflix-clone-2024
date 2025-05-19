import Youtube from "react-youtube";

function TrailerPopup({ trailerUrl, onClose }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <>
      <div className="trailer-overlay" onClick={onClose}></div>
      <div className="trailer-popup">
        <Youtube videoId={trailerUrl} opts={opts} />
        <button className="close-button" onClick={onClose}>
          Close Trailer
        </button>
      </div>
    </>
  );
}

export default TrailerPopup;
