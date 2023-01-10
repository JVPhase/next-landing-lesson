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
          <div className={styles.HeaderMenu}>
            <Image src="/burger-menu.svg" width={28} height={16} alt="Menu" />
          </div>
        </div>
        <h1 className={styles.HeaderTitle}>
          The best products <br />
          start with Figma
        </h1>
        <h2 className={styles.HeaderTitleMobile}>
          The best
          <br />
          products start
          <br />
          with Figma
        </h2>
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
        <div className={styles.FeaturesVideoMobile}>
          <Button className={styles.FeaturesVideoButtonMobile}>
            <Image
              src="/play.svg"
              alt="play"
              className={styles.FeaturesVideoButtonIcon}
              width={13}
              height={15}
            />
          </Button>
        </div>
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
          <Image
            src="/newsletter.svg"
            alt="newsletter"
            width={371}
            height={347}
            className={styles.NewsletterImageMobile}
          />
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
      <div className={styles.Pricing}>
        <h2>Pricing</h2>
        <h4>
          Most calendars are designed for teams.
          <br />
          Slate is designed for freelancers
        </h4>
        <div className={styles.PricingList}>
          <div className={styles.PricingListItem}>
            <h3>FREE</h3>
            <h5>
              Organize across all
              <br />
              apps by hand
            </h5>
            <div className={styles.PricingListItemPrice}>
              <h1>0</h1>
              <div className={styles.PricingListItemPriceText}>
                <h3>$</h3>
                <h5>Per Month</h5>
              </div>
            </div>
            <ul>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
            </ul>
            <Button className={styles.PricingListItemButton}>Order Now</Button>
          </div>
          <div className={styles.PricingListItem}>
            <h3>STANDART</h3>
            <h5>
              Organize across all
              <br />
              apps by hand
            </h5>
            <div className={styles.PricingListItemPrice}>
              <h1>10</h1>
              <div className={styles.PricingListItemPriceText}>
                <h3>$</h3>
                <h5>Per Month</h5>
              </div>
            </div>
            <ul>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
            </ul>
            <Button className={styles.PricingListItemButton}>Order Now</Button>
          </div>
          <div className={styles.PricingListItem}>
            <h3>BUSINESS</h3>
            <h5>
              Organize across all
              <br />
              apps by hand
            </h5>
            <div className={styles.PricingListItemPrice}>
              <h1>99</h1>
              <div className={styles.PricingListItemPriceText}>
                <h3>$</h3>
                <h5>Per Month</h5>
              </div>
            </div>
            <ul>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
              <li>
                <a>Pricing Feature</a>
              </li>
            </ul>
            <Button className={styles.PricingListItemButton}>Order Now</Button>
          </div>
        </div>
      </div>
      <div className={styles.Contact}>
        <h2>Contact Us</h2>
        <h4>
          Most calendars are designed for teams.
          <br /> Slate is designed for freelancers
        </h4>
        <div className={styles.ContactRow}>
          <form className={styles.ContactForm}>
            <h3>Contact Us</h3>
            <Input
              className={styles.ContactFormInput}
              placeholder="Your Name"
            />
            <Input
              className={styles.ContactFormInput}
              placeholder="Your Email"
            />
            <textarea
              className={styles.ContactFormTextarea}
              placeholder="Your Message"
            />
            <Button className={styles.ContactFormButton}>Send</Button>
          </form>
          <div className={styles.ContactInfo}>
            <div className={styles.ContactInfoItem}>
              <Image src="/pin-blue.svg" alt="pin" width={27} height={33} />
              <h5>
                6386 Spring St undefined Anchorage,
                <br />
                Georgia 12473 United States
              </h5>
            </div>
            <div className={styles.ContactInfoItem}>
              <Image src="/phone-blue.svg" alt="phone" width={21} height={33} />
              <h5>(843) 555-0130</h5>
            </div>
            <div className={styles.ContactInfoItem}>
              <Image src="/mail-blue.svg" alt="mail" width={27} height={22} />
              <h5>willie.jennings@example.com</h5>
            </div>
            <div className={styles.ContactInfoMap}>
              <Image src="/map.jpg" alt="map" width={516} height={323} />
            </div>
            <SocialLinks isBlue />
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.FooterRow}>
          <div className={styles.FooterItem}>
            <h3>Pages</h3>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.FooterItem}>
            <h3>Tomothy</h3>
            <ul>
              <li>
                <a>Eleanor Edwards</a>
              </li>
              <li>
                <a>Ted Robertson</a>
              </li>
              <li>
                <a>Annette Russell</a>
              </li>
              <li>
                <a>Jennie Mckinney</a>
              </li>
              <li>
                <a>Gloria Richards</a>
              </li>
            </ul>
          </div>
          <div className={styles.FooterItem}>
            <h3>Jane Black</h3>
            <ul>
              <li>
                <a>Philip Jones</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Colleen Russell</a>
              </li>
              <li>
                <a>Marvin Hawkins</a>
              </li>
              <li>
                <a>Bruce Simmmons</a>
              </li>
            </ul>
          </div>
          <div className={styles.FooterItem}>
            <div className={styles.FooterContact}>
              <Image src="/pin-white.svg" alt="pin" width={46} height={47} />
              <a>7480 Mockingbird Hill undefined</a>
            </div>
            <div className={styles.FooterContact}>
              <Image src="/phone-white.svg" alt="pin" width={46} height={47} />
              <a>(239) 555-0108</a>
            </div>
            <div className={styles.FooterSocialLinks}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
