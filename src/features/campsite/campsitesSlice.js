import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = _ => { return CAMPSITES; }

export const selectRandomCampsite = _ => {
	return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}
