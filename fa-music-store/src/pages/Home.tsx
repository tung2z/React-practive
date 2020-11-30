import React, { useState } from 'react';
import {
	InputGroup,
	FormControl,
	Button,
	Row,
	Col,
} from 'react-bootstrap';
import { IArtist, ITrack } from '../interfaces';
import styles from './Home.module.css';
import { TracksDetail, ArtistsDetail } from '../components';
import { Get } from '../Axios';
const Home = () => {
	const [artists, setArtists] = useState<IArtist[]>([]);
	const [tracks, setTracks] = useState<ITrack[]>([]);
	const [show, setShow] = useState(false);
	const [targetTrack, setTargetTrack] = useState<any>({});
	const [count, setCount] = useState(0);
	const artistsPerPage = 8;
	const handleSearch = (e: any) => {
		const input: any = document.querySelector('#searchInput');
		if (e.type === 'click') {
			Get(
				`https://api.spotify.com/v1/search?q=${input.value}&type=artist&limit=${artistsPerPage}&offset=0`
			)
				.then(res => res.data.artists.items)
				.then(data => setArtists(data))
				.catch(err => console.log(err));
		} else {
			if (e.code === 'Enter') {
				Get(
					`https://api.spotify.com/v1/search?q=${input.value}&type=artist&limit=${artistsPerPage}&offset=0`
				)
					.then(res => res.data.artists.items)
					.then(data => setArtists(data))
					.catch(err => console.log(err));
			}
		}
	};

	const onRightArrowClick = () => {
		const input: any = document.querySelector('#searchInput');
		let url = '';
		if (artists.length === artistsPerPage) {
			url = `https://api.spotify.com/v1/search?q=${
				input.value
			}&type=artist&limit=${artistsPerPage}&offset=${count + artistsPerPage}`;
		}
		if (count > 8) {
			url = `https://api.spotify.com/v1/search?q=${
				input.value
			}&type=artist&limit=${artistsPerPage}&offset=${count - artistsPerPage}`;
		}
		Get(url)
			.then(res => res.data.artists.items)
			.then(data => setArtists(data))
			.catch(err => console.log(err));
		setCount(count + artistsPerPage);
	};

	const onLeftArrowClick = () => {
		const input: any = document.querySelector('#searchInput');
		if (count >= 8) {
			Get(
				`https://api.spotify.com/v1/search?q=${
					input.value
				}&type=artist&limit=${artistsPerPage}&offset=${count - artistsPerPage}`
			)
				.then(res => res.data.artists.items)
				.then(data => setArtists(data))
				.catch(err => console.log(err));
			setCount(count - artistsPerPage);
		}
	};

	const handleShow = (id: string) => {
		setShow(true);
		Get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`)
			.then(res => res.data.tracks)
			.then(data => setTracks(data));
	};

	const handleClose = () => {
		setShow(false);
		setTargetTrack({});
	};

	const onTrackClick = (track: ITrack) => {
		setTargetTrack(track);
	};

	return (
		<div className={styles.home}>
			<Row>
				<Col>
					<h1 className="mt-3">Clone</h1>
				</Col>
				<Col md={12}>
					<Row>
						<Col md={{ span: 4, offset: 4 }}>
							<InputGroup className="mb-3 mt-2">
								<FormControl
									placeholder="Recipient's username"
									id="searchInput"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
									onKeyUp={handleSearch}
								/>
								<InputGroup.Append>
									<Button variant="outline-secondary" onClick={handleSearch}>
										Search
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Col>
					</Row>
				</Col>
				<ArtistsDetail
					artists={artists}
					onLeftArrowClick={onLeftArrowClick}
					onRightArrowClick={onRightArrowClick}
					handleShow={handleShow}
				/>
				<TracksDetail
					show={show}
					handleClose={handleClose}
					tracks={tracks}
					targetTrack={targetTrack}
					onTrackClick={onTrackClick}
				/>
			</Row>
		</div>
	);
};

export default Home;
