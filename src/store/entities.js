import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from './bugs';
import projectsReducer from './projects';

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});
