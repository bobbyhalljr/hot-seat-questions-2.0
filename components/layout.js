import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({children}) {
  return (
    <>
      <Header/>
      <main style={{ paddingTop: '6rem', width: '100%' }}>
        {children}
      </main>
      <Footer/>
    </>
  )
}