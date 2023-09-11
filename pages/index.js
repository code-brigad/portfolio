import { Hero } from '@/components';
import AboutUs from '@/components/AboutUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <main className='flex flex-col gap-4'>
      <Hero />
      <AboutUs />
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
