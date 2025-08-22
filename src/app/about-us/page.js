import AboutHero from '@/components/about/AboutHero'
import Certificates from '@/components/about/Certificates'
import GlobalExecellence from '@/components/about/GlobalExecellence'
import Cta from '@/components/Cta'
import ProductCategories from '@/components/productCategory/ProductCategories'

const page = () => {
  return (
    <>
    <AboutHero/>
    <GlobalExecellence/>
    <Cta/>
    <Certificates/>
    </>
  )
}

export default page