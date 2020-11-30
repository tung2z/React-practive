import * as React from 'react';
import { Row, Col, Image, Modal } from 'react-bootstrap';

import { ITrack } from '../interfaces';

import styles from '../pages/Home.module.css';

interface ITracksDetailProps {
	show: boolean;
	handleClose: () => void;
	tracks: ITrack[];
	targetTrack: ITrack;
	onTrackClick: (track: ITrack) => void;
}

const TracksDetail: React.FunctionComponent<ITracksDetailProps> = props => {
	const { show, handleClose, tracks, targetTrack, onTrackClick } = props;
	return (
		<Modal show={show} onHide={handleClose} size="xl" className={styles.modal}>
			<Modal.Body>
				{tracks.map((track: ITrack, index: number) => (
					<Row
						className={styles.track}
						onClick={() => onTrackClick(track)}
						key={index}
						style={
							track.id === targetTrack.id
								? { backgroundColor: 'rgb(61, 61, 61)' }
								: { backgroundColor: 'inherit' }
						}
					>
						<Col
							md={1}
							className="my-auto"
							style={{ backgroundColor: 'inherit' }}
						>
							{track.id === targetTrack.id && track.preview_url ? (
								<i className="fas fa-pause"></i>
							) : (
								index + 1
							)}
						</Col>
						<Col md={1} style={{ backgroundColor: 'inherit' }}>
							<Image
								src={track.album.images[0].url}
								style={{ height: '50px', width: '50px' }}
								roundedCircle
							/>
						</Col>
						<Col
							md={6}
							className="my-auto"
							style={{ backgroundColor: 'inherit' }}
						>
							{track.name}
						</Col>
						<Col
							md={3}
							className="my-auto"
							style={{ backgroundColor: 'inherit' }}
						>
							{track.album.name}
						</Col>
						<Col
							md={1}
							className="my-auto"
							style={{ backgroundColor: 'inherit' }}
						>
							{(track.duration_ms / (1000 * 60)).toFixed(2)}
						</Col>
					</Row>
				))}
				<audio src={targetTrack?.preview_url} autoPlay={true} loop={true} />
			</Modal.Body>
		</Modal>
	);
};

export default TracksDetail;
