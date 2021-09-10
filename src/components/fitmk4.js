import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image4 = () => {
	return(
		<StaticImage
            src='../images/fitmk4.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='A spooky photo of a house at night'
		/>
	)
}

export default Image4