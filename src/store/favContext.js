import { useState, createContext } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFav: 0,
  addFav: (favMeetUp) => {},
  removeFav: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [fav, setfav] = useState([]);

  function addFavHandler(favMeetUp) {
    //console.log("add", favMeetUp, fav);
    // setfav((prefav) => {
    //   return prefav.concat(favMeetUp);
    // });
    setfav([...fav, favMeetUp]);
  }

  function removeFavHandler(meetupId) {
    //console.log("reemove", meetupId, fav);
    setfav((prefav) => {
      return prefav.filter((meet) => meet.id !== meetupId);
    });
  }

  function itemIsFav(meetupId) {
    return fav.some((meet) => meet.id === meetupId);
  }

  const context = {
    favorite: fav,
    totalFav: fav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsFav,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
