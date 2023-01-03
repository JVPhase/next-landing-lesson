import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Input from '../components/Input';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <>
      <Button>Button</Button>
      <Input placeholder="Input" />
      <SocialLinks isBlue />
      <SocialLinks />
    </>
  );
}
