import { Hero } from '@/components';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <main className='flex flex-col gap-4'>
      <Hero />
      <AboutUs />
      <Services />
    </main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home
