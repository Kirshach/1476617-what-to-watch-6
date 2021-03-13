import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {redirectMiddleware} from './app/middlewares';
// import {checkAuth} from '../store/app/thunks';
import {fetchFilms} from '../store/domain/thunks';
import {rootReducer as reducer} from '../store/rootReducer';

import {api} from '../api/api';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            redirectMiddleware,
            thunk.withExtraArgument(api),
        ),
    ),
);

/* Я пока не понимаю, в чём в перспективе будет состоять логика авторизации
 * при первичной загрузке приложения, потому что инфа о юзере явно должна будет
 * где-то сохраняться. Пока я её нигде не сохраняю, пускай изначального запроса
 * на авторизацию не происходит дабы не писать лишней, потенциально
 * бессмысленной логики
 */
// store.dispatch(checkAuth());
store.dispatch(fetchFilms());

export {store};
