import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomeContent from '../components/HomeComponents/HomeContent'
import Certifications from '../components/Certifications/Certifications'

const certifications = () => {

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <HomeContent />
        <Certifications />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default certifications