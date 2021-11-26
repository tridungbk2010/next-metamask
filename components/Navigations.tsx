import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';
import Treasury from './Treasury';

const Navigations = () => {
  return (
    <div className="flex text-2xl lg:text-xl font-bebasNeue flex-col md:flex-row items-center md:space-x-5 space-y-5 md:space-y-0 text-white">
      <Treasury />
      {/*<a*/}
      {/*  href="https://snapshot.org"*/}
      {/*  target="_blank"*/}
      {/*  rel="noreferrer"*/}
      {/*  className="font-bebasNeue"*/}
      {/*>*/}
      {/*  DAO*/}
      {/*</a>*/}
      <span>DAO</span>
      <Link href="/provenance">
        <a className="hover:text-lime-500">Provenance</a>
      </Link>
      <ConnectWalletButton />
    </div>
  );
};

export default Navigations;
