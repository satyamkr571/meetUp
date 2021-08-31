import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

function NewMeetupForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const FormData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      date: enteredDate,
      description: enteredDescription,
    };

    // console.log(FormData);
    dispatch({ type: "add", payload: { FormData } });
    history.push("/");
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="3"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
