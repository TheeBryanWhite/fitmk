import * as React from 'preact'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Episodes from '../components/episodes'
import Photos from '../components/photos'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Seo title="Home" />
            <Hero />
            <About />
            <Episodes />
            <Photos />
        </Layout>
    )
}

export default IndexPage