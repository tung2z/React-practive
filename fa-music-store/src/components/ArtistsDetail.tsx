import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { IArtist } from '../interfaces';
import styles from '../pages/Home.module.css';
interface IArtistsDetailProps {
	onLeftArrowClick: () => void;
	artists: IArtist[];
	handleShow: (id: string) => void;
	onRightArrowClick: () => void;
}

const ArtistsDetail: React.FunctionComponent<IArtistsDetailProps> = props => {
	const { onLeftArrowClick, onRightArrowClick, artists, handleShow } = props;
	return (
		<Row>
			<Col
				md={{ span: 1, offset: 1 }}
				className={styles.leftArrow}
				onClick={onLeftArrowClick}
			></Col>
			<Col md={8}>
				<Row md={4} className="mt-5">
					{artists.map((artist: IArtist, index: number) => (
						<Col md={3} key={index}>
							<Card
								className={styles.card}
								onClick={() => handleShow(artist.id)}
							>
								<Image
									src={
										artist.images[0]?.url ||
										'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg'
									}
									style={{ height: '12vw', width: '12vw' }}
									roundedCircle
									className="mx-auto mt-3"
								/>
								<Card.Body style={{ backgroundColor: 'inherit' }}>
									<Card.Title style={{ backgroundColor: 'inherit' }}>
										{artist.name}
									</Card.Title>
									<Card.Text style={{ backgroundColor: 'inherit' }}>
										{artist.type}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Col>
			<Col
				md={1}
				className={styles.rightArrow}
				onClick={onRightArrowClick}
			></Col>
		</Row>
	);
};

export default ArtistsDetail;
