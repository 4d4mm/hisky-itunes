import update from "immutability-helper";

export default (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const favoriteIndex = state.indexOf(action.payload.trackId);
      return favoriteIndex === -1
        ? update(state, { $push: [action.payload.trackId] })
        : update(state, { $splice: [[favoriteIndex, 1]] });
    default:
      return state;
  }
};
