import Image from 'next/image';
import { AtSign, GitHub, Send } from 'react-feather';
import Head4Page from '../component/Head4Page';
import Banner from '../component/Banner';
import RadiusBox from '../component/RadiusBox';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <Head4Page title={'About - DoveRank'} />

      <Banner banner={'About'} />

      <RadiusBox>
        <div className="py-6">
          <div className="flex justify-center item-center mb-8">
            <Image
              className="rounded-2xl"
              src="/img/output_512.jpg"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="flex justify-center item-center space-x-4 smt-6">
            <a className="w-5 h-5" title="Telegram" href="/">
              <Send size="100%" stroke="gray" />
            </a>
            <a className="w-5 h-5" title="Email" href="/">
              <AtSign size="100%" stroke="gray" />
            </a>
            <a className="w-5 h-5" title="GitHub" href="/">
              <GitHub size="100%" stroke="gray" />
            </a>
          </div>
        </div>
      </RadiusBox>
    </div>
  );
}
