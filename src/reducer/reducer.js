const initialState = {
  meetupdata: [
    {
      id: "m2",
      title: "This is a second meetup",
      image:
        "https://2sxc.org/portals/0/adam/blog%20app/7h3xalmkckyhwchgdu66bq/image/dnn-angular-2sxc-blog.jpg?mode=max&scale=both&format=jpeg&quality=70&w=800&h=350",
      address: "Meetupstreet 5, 12345 Meetup City",
      date: "2021-12-25",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "m3",
      title: "React Summit",
      image:
        "https://digitalagencynetwork.com/wp-content/uploads/2020/01/react-summit-amsterdam-2020.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      date: "2021-02-05",

      description: "React-Cracy",
    },
    {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://underthehood.meltwater.com/images/own/angular-summit-boston-2017.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      date: "2021-05-25",

      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ],
  userData: [
    {
      name: "Satyam Kumar",
      username: "satyam.kumar@enquero.com",
      password: "Satyam@123",
    },
    {
      name: "Kumar Satyam",
      username: "satyam.kumar1@genpact.com",
      password: "Satyam@123",
    },
  ],
  isSignedIn: false,
};
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        meetupdata: [
          ...state.meetupdata,
          {
            id: new Date(),
            title: action.payload.FormData.title,
            image: action.payload.FormData.image,
            address: action.payload.FormData.address,
            date: action.payload.FormData.date,
            description: action.payload.FormData.description,
          },
        ],
      };
    case "update":
      return {
        ...state,
        meetupdata: state.meetupdata.map((data) => {
          if (data.id === action.payload.FormData.id) {
            data.title = action.payload.FormData.title;
            data.image = action.payload.FormData.image;
            data.address = action.payload.FormData.address;
            data.date = action.payload.FormData.date;
            data.description = action.payload.FormData.description;
            return { ...data };
          } else {
            return { ...data };
          }
        }),
      };
    case "register":
      return {
        ...state,
        userData: [
          ...state.userData,
          {
            name: action.payload.FormData.name,
            username: action.payload.FormData.username,
            password: action.payload.FormData.password,
          },
        ],
      };
    case "login":
      return {
        ...state,
        isSignedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
