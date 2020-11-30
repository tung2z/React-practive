/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { IArtist } from '../interface';
import style from './ArtistDetail.module.css';
import { NavLink, useRouteMatch } from 'react-router-dom';

interface IArtistCardProps {
	data: IArtist;
	onArtistCardClick: (id: string) => void;
}

const ArtistCard: React.FunctionComponent<IArtistCardProps> = props => {
	const { data, onArtistCardClick } = props;
	const { url } = useRouteMatch();
	return (
		<NavLink to={`${url}/${data.id}`} className={style.link}>
			<div
				className={style['artistCard']}
				onClick={() => onArtistCardClick(data.id)}
			>
				<img
					src={
						data.images[0]?.url ||
						'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg'
					}
					alt="image"
					className={style['image']}
				/>
				<h4 className={style.name}>{data.name}</h4>
				<p className={style.name}>Popularity: {data.popularity}</p>
				<p className={style.name}>{data.genres.join(', ')}</p>
			</div>
		</NavLink>
	);
};

export default ArtistCard;
