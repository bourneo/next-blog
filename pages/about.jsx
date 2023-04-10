import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Send } from 'react-feather';
import Head4Page from '../component/Head4Page';
import RadiusLayoutItem from '../component/RadiusLayoutItem';
import packageInfo from '../package.json';

const text_color_deep = 'text-gray-400';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head4Page title={'DoveRank - About'} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/Columba-Arp-Madore-608-333-potw2240a-large.webp')]`}
          >
            <div className="flex justify-center items-center h-96 w-screen max-w-4xl ">
              <div className="text-xl text-white font-bold tracking-wider ">About</div>
            </div>
          </div>
        </div>
      </div>

      <RadiusLayoutItem>
        <div className="py-6 flex flex-col space-y-4">
          <div className="m-auto">
            <Image
              className="rounded-2xl"
              src="/icon/output_512.jpg"
              width={128}
              height={128}
              alt="Avatar"
            />
          </div>

          <div className="m-auto flex flex-col">
            <div className={`${text_color_deep} text-sm m-auto`}>
              Copyright &copy; 2023 by DoveRank.com All Rights Reserved.
            </div>
            <div className={`${text_color_deep} text-sm m-auto`}>{packageInfo.version}</div>
          </div>

          <div className="flex justify-center item-center space-x-3">
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
      </RadiusLayoutItem>
    </div>
  );
}
