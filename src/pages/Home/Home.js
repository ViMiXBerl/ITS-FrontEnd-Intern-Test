import Header from "../../modules/Header/Header";
import CarouselText from "../../components/Carousel/Carousel";
import Text from "../../components/Text/Text";
import { Container, Nav, Image } from "react-bootstrap";
import { Shadow } from "../../assets/index";
import triangleGlow from "../../assets/images/TriangleGlow.png";
import triangle from "../../assets/images/Triangle@2x.png";
import model from "../../assets/images/Model@2x.png";
import VideoImage from "../../assets/images/VideoImage.png";

export const Home = () => {
	return (
		<>
			<Header></Header>
			<Container className='main'>
				<Container className='text'>
					<Text variant='h4'>A fashion club</Text>
					<Text variant='h5'>Pen rose</Text>
					<Text variant='h6'>Coctail</Text>
					<Text variant='p2'>Jump at a chance to participate in</Text>
					<Text variant='p2'>our new fashion adventure</Text>
					<Container className='player-wrapper'>
						<Nav eventkey='/video'>
							<Nav.Item>
								<Nav.Link
									href='/video'
									target='_blank'
									className='styled-nav-link'
								>
									<Image src={VideoImage} className='image-for-video'></Image>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Container>
				</Container>
				<Container className='model-container'>
					<Image src={model} className='model'></Image>
					<Shadow className='box-shadow' />
					<Image src={triangleGlow} className=' box'></Image>
					<Image src={triangle} className=' box-line'></Image>
				</Container>
				<CarouselText />
			</Container>
		</>
	);
};
