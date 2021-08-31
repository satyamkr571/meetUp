import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext, useState } from "react";
//import { useHistory } from "react-router-dom";
import React from "react";
import FavoriteContext from "../../store/favContext";
import UpdateMeetup from "./UpdateMeetup";
import { div } from "prelude-ls";

function MeetupItem(props) {
  // const history = useHistory();
  const favContext = useContext(FavoriteContext);
  const itemIsFav = favContext.itemIsFav(props.id);
  const [editAble, seteditAble] = useState(false);
  function toggletoFav() {
    if (itemIsFav) {
      favContext.removeFav(props.id);
    } else {
      favContext.addFav({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        date: props.date,
        description: props.description,
      });
    }
    // history.push("/favorites");
  }
  function editHandler() {
    seteditAble(true);
  }
  function closeEditForm() {
    seteditAble(false);
  }
  return (
    <li className={classes.item}>
      <Card values={props}>
        {editAble ? (
          <UpdateMeetup data={props} onCloseEditForm={closeEditForm} />
        ) : (
          <>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content} contenteditable={editAble}>
              <button
                style={{
                  position: "relative",
                  float: "right",
                  border: "0px",
                  backgroundColor: "transparent",
                  color: "transparent",
                }}
                onClick={editHandler}
              >
                <img
                  src="https://cdn.icon-icons.com/icons2/2621/PNG/512/gui_edit_icon_157165.png"
                  alt="icon"
                  height="30px"
                  width="30px"
                ></img>
              </button>
              <h3>{props.title}</h3>
              <h4>{props.date}</h4>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
              <button onClick={toggletoFav}>
                {itemIsFav ? "Remove favorites" : "Add to favorites"}
              </button>
            </div>
          </>
        )}
      </Card>
    </li>
  );
}

export default MeetupItem;
