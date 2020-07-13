import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:9001/api',
      url,
      method,
      data,
    });
    dispatch(actions.apiCallSuccess(response.data));

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailed(error));

    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
