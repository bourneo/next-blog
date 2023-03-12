import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Send } from 'react-feather';
import Head4Page from '../component/Head4Page';
import RadiusLayout from '../component/RadiusLayout';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <Head4Page title={'About - DoveRank'} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/Columba-Arp-Madore-608-333-potw2240a-large.jpg')]`}
          >
            <div className="flex justify-center items-center h-32 w-screen max-w-5xl ">
              <div className="text-xl text-white font-bold tracking-wider ">About</div>
            </div>
          </div>
        </div>
      </div>

      <RadiusLayout>
        <div className="py-6">
          <div className="flex justify-center item-center mb-8">
            <Image
              className="rounded-2xl"
              src="/icon/output_512.jpg"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="flex justify-center item-center space-x-4 smt-6">
            <Link className="w-5 h-5" title="Telegram" href="/">
              <Send size="100%" stroke="gray" />
            </Link>
            <Link className="w-5 h-5" title="GitHub" href="/">
              <GitHub size="100%" stroke="gray" />
            </Link>
          </div>
          {/*<Link className="w-5 h-5" title="Email" href="/">*/}
          {/*  <AtSign size="100%" stroke="gray" />*/}
          {/*</Link>*/}
        </div>
      </RadiusLayout>
    </div>
  );
}
