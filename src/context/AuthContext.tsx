import { createContext, useReducer } from "react";
import AuthReducer from "@/context/AuthReducer";
import { getCurrentUser } from "@/apiCalls";

const INITIAL_STATE = {
  user: null,
  isFetching: true,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  console.log(state);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {state.isFetching ? null : children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContextProvider;
