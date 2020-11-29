interface IIngredient {
	name?: string;
	quantity?: number;
}

interface IDataItem {
	id: number;
	name: string;
	imageURL: string;
	description: string;
	ingredients: IIngredient[];
}

export type { IIngredient, IDataItem };
