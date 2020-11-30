import * as React from 'react';
import { TileLayer, Circle, LayerGroup, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = props => {
	return (
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			{/* <TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/> */}
			{/* <LayerGroup>
				<Circle
					center={[51.505, -0.09]}
					pathOptions={{ fillColor: 'red' }}
					radius={200}
				/>
			</LayerGroup> */}
		</MapContainer>
	);
};

export default Map;
