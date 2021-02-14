import {useHistory, useLocation} from "react-router-dom";

export function useNavigation() {
  const history = useHistory();
  const {pathname} = useLocation();
  const redirect = (route) => history.push(route);
  const {goBack} = history;

  return {
    goBack,
    pathname,
    redirect,
  };
}
