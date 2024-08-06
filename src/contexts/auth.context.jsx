import { useState, useEffect, createContext } from "react";

import axios from "axios";

//create context
const AuthContext = createContext();

//create the wrapper function
function AuthProviderWrapper(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //const [loggedIn, setLoggedIn] = useState(false)

  //function to store the token
  const storeToken = token => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    //check if there's a token on localstorage
    //we either get the token or null
    const storedToken = localStorage.getItem("authToken");

    //if there's a token we call / verify on the API
    if (storedToken) {
      try {
        setLoading(true);
        //on a get request the second argument is a configuration/options object, not the req.body
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/verify`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setUser(response.data);
        /* 
        {
        _id: '1234',
        name: ,
        email
        profilePic
        } */
        setLoading(false);
      } catch (error) {
        setUser(false);
        setLoading(false);
      }
    } else {
      setUser(null);
      setLoading(false);
    }

    //return user information OR an error
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  /*   useEffect(() => {
    console.log("useEffect: Mounting");
    getProjects();
  }, []);
 */

  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{ loading, user, storeToken, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
