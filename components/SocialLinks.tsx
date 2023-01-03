import styles from './SocialLinks.module.css';
import Image from 'next/image';

interface SocialLinksProps {
  isBlue?: boolean;
}

export default function SocialLinks({ isBlue }: SocialLinksProps) {
  return (
    <div className={styles.Root}>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/twitter-blue.svg' : '/twitter.svg'}
          width={34}
          height={34}
          alt="Twitter"
        />
      </a>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/facebook-blue.svg' : '/facebook.svg'}
          width={34}
          height={34}
          alt="Facebook"
        />
      </a>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/linkedin-blue.svg' : '/linkedin.svg'}
          width={34}
          height={34}
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}
