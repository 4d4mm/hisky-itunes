import React from "react";
import Fetch from "react-fetch-component";
import { connect } from "react-redux";
import LoadingIndicator from "../components/LoadingIndicator";
import SearchResult from "../components/SearchResult";
import SeactReaultsList from "../components/SearchResultsList";
import { toggleFavorite } from "../actions/favorites";
import Header from "../components/Header";

const SearchResultsScreen = ({
  location,
  history,
  favorites,
  toggleFavorite
}) => {
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  const title = query.replace(/\-+/, " ");
  return (
    <section>
      <Header
        title={`HiSky iTunes search results for "${title}"`}
        history={history}
      />
      <Fetch
        url={`https://itunes.apple.com/search?limit=25&term=${query}`}
        as="json"
      >
        {({ loading, error, data }) => (
          <SeactReaultsList>
            {loading && <LoadingIndicator title={"Loading results"} />}
            {error && `Error ${error}`}
            {data &&
              data.results &&
              data.results.map((searchResult, index) => {
                const { trackId, kind } = searchResult;
                return (
                  <SearchResult
                    key={`track__${trackId}`}
                    isFavorite={favorites.indexOf(trackId) !== -1}
                    toggleFavorite={ev => {
                      ev.preventDefault();
                      toggleFavorite(trackId);
                    }}
                    {...searchResult}
                    isVideo={kind === "feature-movie"}
                  />
                );
              })}
          </SeactReaultsList>
        )}
      </Fetch>
    </section>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: trackId => dispatch(toggleFavorite(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsScreen);
