import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image5 = () => {
	return(
		<StaticImage
            src='../images/fitmk5.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='An opaque photo of a person pressed against a screen'
		/>
	)
}

export default Image5