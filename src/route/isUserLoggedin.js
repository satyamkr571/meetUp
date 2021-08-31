import { useSelector } from "react-redux";

export const IsLoggedIn = () => {
  const isSignedIn = useSelector((state) => state.isSignedIn);

  return isSignedIn;
};
