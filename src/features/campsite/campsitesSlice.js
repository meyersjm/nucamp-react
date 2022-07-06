//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../app/shared/baseURL';
import { mapImageURL } from '../../utils/mapImageURL';

//const initialState = { campsitesArray: CAMPSITES };

export const fetchCampsites = createAsyncThunk(
	'campsites/fetchCampsites',
	async () => {
		const response = await fetch(baseURL + 'campsites');
		if (!response.ok) {
			return Promise.reject('Unable to fetch, status: ' + response.status);
		}
		const data = await response.json();
		return data;
	}
);

const initialState = {
	campsitesArray: [],
	isLoading: true,
	errMsg: ''
};

const campsitesSlice = createSlice({
	name: 'campsites',
	initialState,
	reducers: new Object,
	extraReducers: {
		[fetchCampsites.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchCampsites.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errMsg = '';
			state.campsitesArray = mapImageURL(action.payload);
		},
		[fetchCampsites.rejected]: (state, action) => {
			state.isLoading = false;
			state.errMsg = action.error ? action.error.message : 'Fetch failed';
		}
	}
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = state => { return state.campsites.campsitesArray; }
/*
export const selectRandomCampsite = _ => {
	return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}
*/

export const selectCampsiteById = id => state => {
	return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = state => {
	return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};



