import MobileHeader from '../components/MobileHeader'
import MobileSponsors from '../components/MobileSponsors'
import MobileTracks from '../components/MobileTracks'
import MobileIntroduction from '../components/MobileIntroduction'
import FAQ from '../components/AllQuestions'

import styles from '../css/MobileHome.module.css'

const MobileHome = props => {
  return (
    <div className={styles.container}>
      <MobileHeader />
      <MobileIntroduction />
      <MobileTracks />
      <FAQ />
      <MobileSponsors />
    </div>
  )
}

export default MobileHome
