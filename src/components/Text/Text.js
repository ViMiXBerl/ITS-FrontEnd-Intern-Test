import React from "react";
import {
	TextHeading1,
	TextHeading2,
	TextHeading3,
	TextHeading4,
	TextHeading5,
	TextHeading6,
	Paragraph1,
	Paragraph2,
	Paragraph3,
	Paragraph4,
	Paragraph5,
} from "./styledText";

const Text = ({ variant, children }) => {
	switch (variant) {
		case "h1":
			return <TextHeading1>{children}</TextHeading1>;
		case "h2":
			return <TextHeading2>{children}</TextHeading2>;
		case "h3":
			return <TextHeading3>{children}</TextHeading3>;
		case "h4":
			return <TextHeading4>{children}</TextHeading4>;
		case "h5":
			return <TextHeading5>{children}</TextHeading5>;
		case "h6":
			return <TextHeading6>{children}</TextHeading6>;
		case "p1":
			return <Paragraph1>{children}</Paragraph1>;
		case "p2":
			return <Paragraph2>{children}</Paragraph2>;
		case "p3":
			return <Paragraph3>{children}</Paragraph3>;
		case "p4":
			return <Paragraph4>{children}</Paragraph4>;
		case "p5":
			return <Paragraph5>{children}</Paragraph5>;
		default:
			return <Paragraph4>{children}</Paragraph4>;
	}
};

export default Text;
