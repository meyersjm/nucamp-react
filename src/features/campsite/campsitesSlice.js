import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = _ => { return CAMPSITES; }
/*
export const selectRandomCampsite = _ => {
	return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}
*/

export const selectCampsiteById = id => {
	return CAMPSITES.find((campsite) => campsite.id === id);
};

export const selectFeaturedCampsite = _ => {
	return CAMPSITES.find((campsite) => campsite.featured);
};
