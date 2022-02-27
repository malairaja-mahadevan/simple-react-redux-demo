import axios from "axios";
const apiURL =
  process.env.NODE_ENV === "production" ? "" : `http://localhost:8080`;

const getUserData = () => {
  return (dispatch) => {
    return (
      axios
        .get(`${apiURL}/api/users`)
        // We get the API response and receive data in JSON format...
        .then((response) => {
          dispatch({ type: "SET_USER_DATA", payload: response.data });
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
};

const setPlanData = (plan) => {
  return {
    type: "SET_PLAN_DATA",
    payload: plan,
  };
};

export const actions = {
  getUserData,
  setPlanData,
};
