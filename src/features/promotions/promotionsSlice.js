import { PROMOTIONS} from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = _ => {
	return PROMOTIONS.find((promotion) => promotion.featured);
};

