import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsite/campsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { logger } from 'redux-logger';

export const store = configureStore({
	reducer: {
		campsites: campsitesReducer,
		comments: commentsReducer,
		partners: partnersReducer,
		promotions: promotionsReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([ logger ])
});
