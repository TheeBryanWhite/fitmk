import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image2 = () => {
	return(
		<StaticImage
            src='../images/fitmk2.jpg'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt='A mysterious photo of 2 girls in spooky makeup, surrounded by mist'
		/>
	)
}

export default Image2