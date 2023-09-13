import { AboutUs, Hero, Services, Team, Contact } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  return (
    <main className='flex flex-col'>
      <Hero />
      <div className='flex flex-col gap-[60px]'>
        <AboutUs />
        <Services />
        <Team />
        <Contact />
      </div>
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
