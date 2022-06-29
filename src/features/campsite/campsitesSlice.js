import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { campsitesArray: CAMPSITES };

const campsitesSlice = createSlice({
	name: 'campsites',
	initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = _ => { return CAMPSITES; }
/*
export const selectRandomCampsite = _ => {
	return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}
*/

export const selectCampsiteById = id => {
	return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = _ => {
	return CAMPSITES.find((campsite) => campsite.featured);
};
