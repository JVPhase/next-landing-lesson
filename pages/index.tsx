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
        <Button className={styles.HeaderButton}>
          <h3>Try For Free</h3>
        </Button>
      </div>
      <div className={styles.Features}>
        <h2>Features</h2>
        <h4>
          Most calendars are designed for teams. <br />
          Slate is designed for freelancers
        </h4>
        <div className={styles.FeaturesList}>
          <div>
            <Image
              src="/shapes.svg"
              alt="shapes"
              className={styles.FeaturesListItemIcon}
              width={47}
              height={47}
            />
            <h3>
              OpenType features
              <br />
              Variable fonts
            </h3>
            <p className={styles.FeaturesListItemText}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
          <div>
            <Image
              src="/drawning.svg"
              alt="dravning"
              className={styles.FeaturesListItemIcon}
              width={45}
              height={42}
            />
            <h3>Design with real data</h3>
            <p className={styles.FeaturesListItemText}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
          <div>
            <Image
              src="/brush.svg"
              alt="brush"
              className={styles.FeaturesListItemIcon}
              width={49}
              height={47}
            />
            <h3>
              Fastest way to
              <br />
              take action
            </h3>
            <p className={styles.FeaturesListItemText}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
        </div>
        <div className={styles.FeaturesVideo}>
          <Button className={styles.FeaturesVideoButton}>
            <Image
              src="/play.svg"
              alt="play"
              className={styles.FeaturesVideoButtonIcon}
              width={40}
              height={48}
            />
          </Button>
        </div>
      </div>
      <div className={styles.Advantage}>
        <div>
          <h2>
            Fastest way to <br />
            organize
          </h2>
          <h4>
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </h4>
          <Button className={styles.AdvantageButton}>
            <h3>Try For Free</h3>
          </Button>
        </div>
        <div>
          <Image src="/macbook.png" alt="macbook" width={624} height={349} />
        </div>
      </div>
      <div className={styles.Newsletter}>
        <div>
          <Image
            src="/newsletter.svg"
            alt="newsletter"
            width={678}
            height={515}
          />
        </div>
        <div>
          <h3>At your fingertips</h3>
          <h2>
            Lightning fast <br />
            prototyping
          </h2>
          <form className={styles.NewsletterForm}>
            <h3>Subscribe to our Newsletter</h3>
            <p>Available exclusivery on Figmaland</p>
            <Input
              placeholder="Your email"
              className={styles.NewsletterInput}
            />
            <Button className={styles.NewsletterButton}>Subscribe</Button>
          </form>
        </div>
      </div>
      <div className={styles.Partners}>
        <h2>Partners</h2>
        <h4>
          Most calendars are designed for teams. <br />
          Slate is designed for freelancers
        </h4>
        <div className={styles.PartnersList}>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/google.svg" alt="google" width={194} height={64} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/amazon.png" alt="amazon" width={193} height={58} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image
                src="/microsoft.png"
                alt="microsoft"
                width={221}
                height={77}
              />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/uber.png" alt="uber" width={140} height={77} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/dropbox.png" alt="dropbox" width={229} height={46} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/google.svg" alt="google" width={194} height={64} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/uber.png" alt="uber" width={140} height={77} />
            </div>
          </div>
          <div className={styles.PartnersItem}>
            <h5>Client Name</h5>
            <div className={styles.PartnersItemImage}>
              <Image src="/amazon.png" alt="amazon" width={193} height={58} />
            </div>
          </div>
        </div>
        <Button className={styles.PartnersButton}>
          <h3>Try For Free</h3>
        </Button>
      </div>
      <div className={styles.Testimonials}>
        <h2>Testimonials</h2>
        <Image
          src="/ibm.svg"
          alt="ibm"
          width={150}
          height={60}
          className={styles.TestimonialsIbm}
        />
        <h4>
          Most calendars are designed for teams. Slate is designed for
          freelancers
          <br />
          who want a simple way to plan their schedule.
        </h4>
        <div className={styles.TestimonialsContent}>
          <Image src="/avatar.png" alt="avatar" width={50} height={50} />
          <div className={styles.TestimonialsText}>
            <p>Organize across</p>
            <a>Ui designer</a>
          </div>
        </div>
        <Button className={styles.TestimonialsButton}>
          <h3>More Testimonials</h3>
        </Button>
      </div>
      <div className={styles.Pricing}></div>
      <div className={styles.Contact}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}
