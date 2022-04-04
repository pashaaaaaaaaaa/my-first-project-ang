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

export interface WrSetsApi {
	set1: {
		data: SetOne[];
	},
	set2: {
		data: SetTwo[];
	}
}