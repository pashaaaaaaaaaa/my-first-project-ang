export interface SetOne {
	title: string;
	id: number;
	qtyRelease: number;
	releaseDate: string;
	description: string;
}

export interface SetTwo {
	id: number;
	title: string;
	description: string;
}

// export interface BooksAllData {
//     set1: {
//       data: bookCard[];
//     };
//     set2: {
//       data: bookEdit[];
//     };
//   }
//   export interface bookCard{
//       id: number;
//       title: string;
//       description: string;
//     }
  
//   export interface bookEdit{
//       id: number;
//       releaseDate: string;
//       qtyRelease: number;
//     }
//   export interface tableBook {
//       title: string;
//       description: string;
//       releaseDate: string;
//       id: number;
//       qtyRelease: number;
//     }