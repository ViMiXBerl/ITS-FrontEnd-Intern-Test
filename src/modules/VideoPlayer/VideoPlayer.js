import ResponsivePlayer from "react-player";
import { useState, useRef } from "react";
import ControlsVideo from "../../components/ControlsVideo/ControlsVideo";

const VideoPlayer = () => {
	const [state, setState] = useState({
		playing: false,
		volume: 1,
		loadedSeconds: 1,
		playedSeconds: 0,
	});

	const { playing, volume, loadedSeconds, playedSeconds } = state;

	const refPlayer = useRef();

	const handlePlay = () => {
		setState({ ...state, playing: !state.playing });
	};

	const handleVolume = (event) => {
		setState({ ...state, volume: event.target.value });
	};

	const handleProgress = (event) => {
		setState({ ...state, ...event });
	};

	const handleProgressTrack = (event) => {
		refPlayer.current.seekTo(Number(event));
	};

	return (
		<>
			<ResponsivePlayer
				controls={false}
				playing={playing}
				volume={volume}
				ref={refPlayer}
				onProgress={handleProgress}
				width='100%'
				height='100%'
				url='https://www.youtube.com/watch?v=Uh9643c2P6k'
			></ResponsivePlayer>
			<ControlsVideo
				playing={playing}
				handlePlay={handlePlay}
				volume={volume}
				handleVolume={handleVolume}
				loadedSeconds={loadedSeconds}
				playedSeconds={playedSeconds}
				handleProgressTrack={handleProgressTrack}
			/>
		</>
	);
};

export default VideoPlayer;
