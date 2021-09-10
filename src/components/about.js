/** @jsxRuntime classic */
/** @jsx jsx */
import { 
    css,
    jsx
} from '@emotion/react'
import {useEffect} from "react"
import theme from '../theme'
import {
    Image2,
    Image3,
    Image4,
    Image5,
    Image6
} from '../components/fitmk'

const About = () => {

    useEffect(() => {
        const main = document.getElementById('main')
		const target = document.querySelectorAll('.mask-this')
        const clipMask = () => {
            [...target].forEach(element => {
				element.style.opacity = 1
				const targetRect = element.getBoundingClientRect()
				const targetParent = element.parentNode
                const parentRect = targetParent.getBoundingClientRect()
                const mask = parentRect.top - targetRect.top
				element.style.clip = `rect(${mask}px, auto, auto, auto)`
            })
        }

		const makeVisible = () => {
			[...target].forEach(element => {
				element.style.opacity = 1
			})
			return false
        }
        
        if (typeof window !== 'undefined') {
			window.addEventListener('load', () => {
				clipMask()
				makeVisible()
			}
			, false)
			main.addEventListener('resize', clipMask, false)
            main.addEventListener('scroll', clipMask, false)
		}
    }, [])
    
    return (
        <section
            css={css`
            .about-fitmk-slide {
                height: 100vh;
                position: relative;
                scroll-snap-align: start;
                
                h2,
                p {
                    font-family: ${theme.fonts.youmurderer};
                    font-size: 15vw;
                    padding: 0 10%;
                    text-align: center;
                    text-shadow: -2px -2px 4px ${theme.colors.black};

                    @media all and (min-width: ${theme.breakpoint.tablet}) {
                        font-size: 12vw;
                    }

                    @media all and (min-width: ${theme.breakpoint.desktop}) {
                        font-size: 8vw;
                    }
                }
            }

            .mask-this {
                left: 50%;
                opacity: 0;
                pointer-events: none;
                position: fixed;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }
        `}
        >
            <div className="about-fitmk-slide">
                <Image2 />
                <h2 className="mask-this">Fear is the Mind Killer is a podcast.</h2>
            </div>
            <div className="about-fitmk-slide">
                <Image3 />
                <p className="mask-this">A podcast about fear.</p>
            </div>
            <div className="about-fitmk-slide">
                <Image4 />
                <p className="mask-this">A candid conversation seeking to understand what frightens us.</p>
            </div>
            <div className="about-fitmk-slide">
                <Image6 />
                <p className="mask-this">And why.</p>
            </div>
            <div
                className="about-fitmk-slide"
                css={css`
                    color: ${theme.colors.red};
                `}
            >
                <Image5 />
                <p className="mask-this">What are you afraid of?</p>
            </div>
        </section>
    )
}

export default About