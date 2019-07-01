import React from "react";
import Fetch from "react-fetch-component";
import { Link } from "react-router-dom";

const SIZES = [1]; //[3, 1, 1, 2, 2, 2, 1, 1];

const SearchResultsScreen = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  return (
    <div>
      <h1>results for "{query}"</h1>
      <Fetch
        url={`https://itunes.apple.com/search?limit=25&term=${encodeURIComponent(
          query
        )}`}
        as="json"
      >
        {({ loading, error, data }) => (
          <div className="result-list">
            {loading && "Loading..."}
            {error && `Error ${error}`}
            {/* <pre style={{ textAlign: "left" }}>
              <code>{data && JSON.stringify(data, null, 2)}</code>
            </pre> */}
            {data &&
              data.results &&
              data.results.map((searchResult, index) => {
                const {
                  trackId,
                  artworkUrl100,
                  artistName,
                  collectionName,
                  trackName
                } = searchResult;
                const itemSize = SIZES[index % SIZES.length];
                return (
                  <Link
                    to={`/details/${trackId}`}
                    className="result-list-item"
                    style={{
                      //position: "relative",
                      width:
                        searchResult.kind === "feature-movie" ? "20vw" : "30vw"
                      // height: "50vw",
                      // display: "inline-block",
                      // textDecoration: "none",
                      // margin: '0 20px'
                      //top: `${(index%5%2? -1: 1) * (index%5* 3) }px`,
                      //   clipPath: `polygon(0.5rem 0,calc(100% - 0.5rem) 0,100% 0.5rem,100% calc(100% - 0.5rem),calc(100% - 0.5rem) 100%,0.5rem 100%,0 calc(100% - 0.5rem),0 0.5rem)`
                    }}
                  >
                    <img
                      src={artworkUrl100.replace("100x100bb", "512x512")}
                      alt={`${artistName} - ${collectionName}`}
                      className="result-list-item__image"
                    />

                    {/* <h2>{artistName}</h2>
                      <h2>{collectionName}</h2> */}
                    <h2
                      style={{
                        //fontFamily: "MorganiteBlack",
                        textRendering: "geometricPrecision",
                        fontSize: `${itemSize * 2}rem`,
                        letterSpacing: `${itemSize * 0.2}rem`,
                        color: "black",
                        textDecoration: "none",
                        margin: 0,
                        textAlign: "right"

                        // margin: 0,
                        // padding: `${itemSize * 0.5}rem 0 0 `,
                        // borderBottom: `${itemSize *
                        //   0.5}rem solid currentColor`,
                        // borderTop: `${itemSize * 0.5}rem solid currentColor`
                      }}
                    >
                      {trackName}
                    </h2>
                  </Link>
                );
              })}
          </div>
        )}
      </Fetch>
    </div>
  );
};

export default SearchResultsScreen;
