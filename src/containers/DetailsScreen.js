import React from "react";
import Fetch from "react-fetch-component";
import ReactPlayer from "react-player";

// const AUDIO_TYPES = ["coached-audio", "podcast-episode", "song"];
// const VIDEO_TYPES = ["feature-movie", "music-video", "tv-episode"];

const DetailsScreen = ({ match }) => (
  <div>
    {/* <h1>details for {match.params.trackId}</h1> */}
    <Fetch
      url={`https://itunes.apple.com/lookup?id=${match.params.trackId}`}
      as="json"
    >
      {({ loading, error, data }) => (
        <div style={{ width: "100%", height: "100%" }}>
          {loading && "Loading..."}
          {error && "Error "}
          {data &&
            data.results &&
            data.results.map(item => {
              return (
                <div key={item.trackId || new Date().getTime()}>
                  <img
                    src={item.artworkUrl100.replace("100x100bb", "512x512")}
                    alt={item.trackTitle}
                    style={{ width: "100vh", maxWidth: "60vw" }}
                  />
                  <ReactPlayer
                    url={item.previewUrl}
                    playing
                    controls
                    poster={item.artworkUrl100}
                  />
                  {JSON.stringify(item)}
                </div>
              );
            })}
        </div>
      )}
    </Fetch>
  </div>
);

export default DetailsScreen;
