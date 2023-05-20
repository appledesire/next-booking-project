import Content from './components/Layout/Content'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Top from './components/Layout/Top'

export default function Home() {
  return (
    <>
      <div className='bg-[#2A5FFF]'>
        <Header />
        <Top />
      </div>
      <Content />
      <Footer />
    </>
  )
}
