import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image1 = () => {
	return(
		<StaticImage
            src='../images/fitmk1.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='A menacing photo of a child in clown makeup'
		/>
	)
}

export default Image1