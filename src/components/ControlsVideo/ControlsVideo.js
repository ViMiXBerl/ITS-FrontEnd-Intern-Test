import { Container } from "react-bootstrap";
import { PlayBtn, PauseBtn, FullScreen } from "../../assets/index";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const ControlsVideo = ({
	handlePlay,
	playing,
	handleVolume,
	volume,
	handleProgressTrack,
	loadedSeconds,
	playedSeconds,
}) => {
	return (
		<>
			<Container className='internal-videoplayer-controls'>
				<Container className='internal-videoplayer-controls-wrapper'>
					{!playing ? (
						<PlayBtn className='play-btn-controls' onClick={handlePlay} />
					) : (
						<PauseBtn
							className='pause-btn-controls'
							onClick={handlePlay}
							fill='red'
						/>
					)}
					<VolumeDown />
					<input
						className='volume-slider'
						type='range'
						value={volume}
						min='0'
						max='1'
						step='0.1'
						onChange={handleVolume}
					/>
					<VolumeUp />
					<input
						className='progress-slider'
						type='range'
						value={playedSeconds}
						min='0'
						max={loadedSeconds}
						step='0.1'
						onChange={(e) => handleProgressTrack(e.target.value)}
					/>
				</Container>
			</Container>
		</>
	);
};

export default ControlsVideo;
