import * as React from "preact"
import { StaticImage } from "gatsby-plugin-image"

const Image6 = () => {
	return(
		<StaticImage
            src='../images/fitmk6.jpg'
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt={`A photo of a person looking into a glowing window`}
		/>
	)
}

export default Image6