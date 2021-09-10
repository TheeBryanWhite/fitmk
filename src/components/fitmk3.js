import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image3 = () => {
	return(
		<StaticImage
            src='../images/fitmk3.jpg'
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt={`A photo of a person's hands clinging to a cliff's edge`}
		/>
	)
}

export default Image3