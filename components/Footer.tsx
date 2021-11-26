import Link from 'next/link';
import SocialLinks from '../shared/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center">
      <SocialLinks />
      <div className="text-white text-center text-sm text-gray-400">
        Made in Toronto with ❤️
      </div>
      <Link href="/terms-and-conditions">
        <a className="text-white text-center text-xs underline inline-block mt-3 hover:text-lime-500">
          Terms & Conditions
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
