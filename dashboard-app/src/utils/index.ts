interface IColors {
	[prop: string]: string;
}

interface IFaIcons {
	[prop: string]: string;
}

const colors: IColors = {
	confirmed: '#512da8',
	recovered: '#009688',
	deaths: '#e91e63',
	fatalityRate: '#c2185b',
};

const faIcons: IFaIcons = {
	confirmed: 'user',
	recovered: 'plus-square',
	deaths: 'procedures',
	fatalityRate: 'exclamation-circle',
};

export { colors, faIcons };
