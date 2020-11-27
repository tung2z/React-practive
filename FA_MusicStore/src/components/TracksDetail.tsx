import React, { useState } from 'react';
import { ITrack } from '../interface';
import style from './TracksDetail.module.css';

interface ITrackDetailProps {
	data: ITrack[];
}

const TracksDetail: React.FunctionComponent<ITrackDetailProps> = props => {
	const { data } = props;
	const [targetTrack, setTargetTrack] = useState<ITrack>();
	const onHandleMusic = (track: ITrack) => {
		setTargetTrack(track);
	};

	return (
		<div className={style.tracksContainer}>
			<div className={style.tracks}>
				<div className={style.track}>
					<p className={style.index}>#</p>
					<p className={style.title}>TITLE</p>
					<p className={style.album}>ALBUM</p>
					<p className={style.date}>DATE</p>
					<p className={style.time}>TIME</p>
				</div>
				{data.map((item, index) => (
					<div
						className={style.track}
						key={index}
						onClick={() => onHandleMusic(item)}
					>
						<p className={style.index}>{index + 1}</p>
						<div className={style.title}>
							<img src={item.album.images[0].url} alt={item.artists[0].name} />
							<div className={style.bodyTitle}>
								<h5>{item.name}</h5>
								<p>{item.artists[0].name}</p>
							</div>
						</div>
						<p className={style.album}>{item.album.name}</p>
						<p className={style.date}>{item.album.release_date}</p>
						<p className={style.time}>
							{(item.duration_ms / (1000 * 60)).toFixed(2)}
						</p>
					</div>
				))}
			</div>
			<audio
				src={targetTrack?.preview_url}
				autoPlay={true}
				className={style.audio}
				loop={true}
				controls
			/>
		</div>
	);
};

export default TracksDetail;
