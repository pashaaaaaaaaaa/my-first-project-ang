export interface SetOne {
	title: string;
	id: number;
	description: string;
}

export interface SetTwo {
	id: number;
	qtyRelease: number;
	releaseDate: string;
}

export interface WrSets extends SetOne, SetTwo {}
