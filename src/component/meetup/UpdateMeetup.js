import React, { useState } from "react";
import classs from "./MeetupItem.module.css";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function UpdateMeetup(props) {
  const dispatch = useDispatch();
  const [FormData, setFormData] = useState({
    id: props.data.id,
    title: props.data.title,
    image: props.data.image,
    address: props.data.address,
    date: props.data.date,
    description: props.data.description,
  });
  const history = useHistory();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    dispatch({ type: "update", payload: { FormData } });
    props.onCloseEditForm();
    history.push("/");
  }

  function closeEditHandler(e) {
    e.preventDefault();
    props.onCloseEditForm();
  }
  return (
    <>
      <Card values={props.data}>
        <div className={classs.image}>
          <img src={props.data.image} alt={props.data.title} />
        </div>
        {/* <div className={classes.content}> */}
        <form
          className={classes.form}
          onSubmit={submitHandler}
          // style={{ backgroundColor: "rgb(174, 200, 238)" }}
        >
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              name="title"
              required
              id="title"
              value={FormData.title}
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              type="url"
              name="image"
              required
              id="image"
              value={FormData.image}
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              name="address"
              id="address"
              value={FormData.address}
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              required
              id="date"
              style={{}}
              value={FormData.date}
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows="3"
              value={FormData.description}
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Save Edit</button> <></>
            <button onClick={closeEditHandler}>Close Edit </button>
          </div>
        </form>
        {/* </div> */}
        {/* <div className={classes.actions}></div> */}
      </Card>
    </>
  );
}

export default UpdateMeetup;
