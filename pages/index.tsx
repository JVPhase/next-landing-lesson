import styles from '../styles/Home.module.css';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import Input from '../components/Input';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <div className={styles.Navigation}>
          <a href="#" className={styles.HeaderLink}>
            Home
          </a>
          <a href="#" className={styles.HeaderLink}>
            Product
          </a>
          <a href="#" className={styles.HeaderLink}>
            Pricing
          </a>
          <a href="#" className={styles.HeaderLink}>
            About
          </a>
          <a href="#" className={styles.HeaderLink}>
            Contact
          </a>
          <a href="#" className={styles.HeaderLogo}>
            <Image src="/logo.png" width={186} height={58} alt="Logo" />
          </a>
          <div className={styles.HeaderSocialLinks}>
            <SocialLinks />
          </div>
        </div>
        <h1 className={styles.HeaderTitle}>
          The best products <br />
          start with Figma
        </h1>
        <h4 className={styles.HeaderSubtitle}>
          Most calendars are designed for teams. Slate is designed
          <br />
          for freelancers
        </h4>
        <Button className={styles.HeaderButton}>Try for free</Button>
      </div>
      <div className={styles.Features}></div>
      <div className={styles.Advantage}></div>
      <div className={styles.Newsletter}></div>
      <div className={styles.Partners}></div>
      <div className={styles.Testimonials}></div>
      <div className={styles.Pricing}></div>
      <div className={styles.Contact}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}
