export type RatingOptions = 'great' | 'good' | 'neutral' | 'bad' | null;

export interface Rating {
	reviewText: string;
	reviewRating: RatingOptions;
}
