//import Card from "../component/ui/Card";
import { useContext } from "react";
import MeetupList from "../component/meetup/MeetupList";
import FavoriteContext from "../store/favContext";
function FavoritesPage(props) {
  const favorites = useContext(FavoriteContext);
  let content;
  if (favorites.totalFav === 0) {
    content = (
      <h1 style={{ color: "black" }}> This is nothing in the favorite</h1>
    );
  } else {
    content = <MeetupList meetups={favorites.favorite}></MeetupList>;
  }
  return <section>{content}</section>;
}

export default FavoritesPage;
