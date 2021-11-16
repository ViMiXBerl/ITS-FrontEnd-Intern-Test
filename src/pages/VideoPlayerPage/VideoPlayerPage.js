import Header from "../../modules/Header/Header";
import { Container } from "react-bootstrap";
import VideoPlayer from "../../modules/VideoPlayer/VideoPlayer";

export const VideoPlayerPage = () => {
	return (
		<>
			<Header />

			<Container className='internal-videoPlayer-wrapper'>
				<VideoPlayer />
			</Container>
		</>
	);
};
