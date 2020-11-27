export interface IArtist {
	external_urls: { spotify: string };
	follower: { href: string; total: number };
	genres: string[];
	href: string;
	id: string;
	images: { height: number; url: string; width: number }[];
	name: string;
	popularity: string;
	type: string;
	uri: string;
}

export interface ITrack {
	album: {
		album_types: string;
		artists: {
			external_urls: {
				spotify: string;
			};
			href: string;
			id: string;
			name: string;
			type: string;
			uri: string;
		}[];
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		images: {
			height: number;
			url: string;
			width: number;
		}[];
		name: string;
		release_date: string;
		release_date_precision: string;
		total_tracks: number;
		type: string;
		uri: string;
	};
	artists: {
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[];
	available_markets: any[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: {
		isrc: string;
	};
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	is_local: boolean;
	is_playable: boolean;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
}
