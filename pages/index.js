import { Hero } from '@/components';
import AboutUs from '@/components/AboutUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <main className="relative top-[100px]">
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
