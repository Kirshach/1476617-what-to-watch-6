import {useHistory} from "react-router-dom";

export function useNavigation() {
  const history = useHistory();
  const redirect = (route) => history.push(route);
  const {goBack} = history;

  return {
    goBack,
    redirect,
  };
}
