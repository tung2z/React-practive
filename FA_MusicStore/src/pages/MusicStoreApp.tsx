/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ArtistDetail, TrackDetail } from '../components';
import { IArtist, ITrack } from '../interface';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import axios from 'axios';
import { OAUTH_TOKEN } from '../utils/constants';
import style from './MusicStoreApp.module.css';

interface IMusicStoreAppProps {}

const MusicStoreApp: React.FunctionComponent<IMusicStoreAppProps> = props => {
	const [artists, setArtists] = useState<IArtist[]>([]);
	const [tracks, setTracks] = useState<ITrack[]>([]);
	const { path } = useRouteMatch();
	let history = useHistory();
	const source = axios.CancelToken.source();
	const onSearchChange = (e: any) => {
		axios({
			method: 'get',
			url: `https://api.spotify.com/v1/search?q=${
				e.target.value || ' '
			}&type=artist`,
			headers: {
				Authorization: `Bearer ${OAUTH_TOKEN}`,
			},
			cancelToken: source.token,
		})
			.then(resolve => {
				setArtists(resolve.data.artists.items);
				setTracks([]);
				history.push('/music-store');
			})
			.catch(err => {
				if (axios.isCancel(err)) {
					console.log('cancel');
				} else {
					console.log(err);
				}
			});
		if (source) {
			source.cancel();
		}
	};

	const onArtistCardClick = (id: string) => {
		axios({
			method: 'get',
			url: `https://api.spotify.com/v1/artists/${id}/top-tracks?market=us`,
			headers: {
				Authorization: `Bearer ${OAUTH_TOKEN}`,
			},
		})
			.then(resolve => {
				setTracks(resolve.data.tracks);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>Simple Spotify search app</h1>
			<div className="input-group mb-3 mt-5">
				<input
					type="text"
					name="search"
					id="search"
					className="form-control"
					placeholder="Search by artist's name..."
					onChange={onSearchChange}
				/>
			</div>
			<div className={style.artistsContainer}>
				{artists?.map((item, index) => (
					<ArtistDetail
						data={item}
						key={index}
						onArtistCardClick={onArtistCardClick}
					/>
				))}
			</div>
			<Switch>
				<Route path={`${path}/:id`}>
					<TrackDetail data={tracks} />
				</Route>
			</Switch>
		</div>
	);
};

export default MusicStoreApp;
