import { Carousel, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Text from "../Text/Text";
import axios from "axios";
import { ContainerInner } from "./styledCarousel";

const CarouselText = () => {
	const [elements, setElement] = useState([]);

	useEffect(() => {
		const fetchElements = async () => {
			const { data } = await axios.get(
				"https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
			);

			setElement(data.filter((elem) => Number(elem.price) <= 5));
		};

		fetchElements();
	}, []);

	console.log(elements);

	return (
		<>
			<Container>
				<Carousel interval={null} wrap={false}>
					{elements.map((elem) => (
						<Carousel.Item key={elem.id}>
							<ContainerInner>
								<Text variant='p3'>&#10077;</Text>
								<Text variant='p4'>{elem.name}</Text>
								<Text variant='p5'>— {elem.price}</Text>
							</ContainerInner>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</>
	);
};

export default CarouselText;
