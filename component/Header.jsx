import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MenuButton from './MenuButton';
import { useRouter } from 'next/router';

const text_color_light = 'text-gray-200';

const menu = [
  { title: 'Home', href: '/', delay: 'delay-[100ms]' },
  { title: 'Blog', href: '/blog', delay: 'delay-[150ms]' },
  { title: 'Flow', href: '/flow', delay: 'delay-[200ms]' },
  { title: 'Tags', href: '/tags', delay: 'delay-[250ms]' },
  { title: 'About', href: '/about', delay: 'delay-[300ms]' },
];

const ToggleIcon = ({ icon: Icon, hidden }) => {
  return (
    <Icon
      className="w-6 h-6 absolute top-1 left-0 transition duration-150 opacity-100 scale-100 data-[hidden=true]:invisible data-[hidden=true]:opacity-0 data-[hidden=true]:scale-0"
      data-hidden={hidden}
    />
  );
};

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  const classMenuBase =
    "flex items-center text-sm text-gray-300 hover:opacity-60 after:content-['·'] after:mx-3 last:after:hidden";
  const classHiddenMenuBase = 'flex py-4 px-2 text-sm font-medium text-gray-300 hover:opacity-60';

  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  const handleLinkClick = () => {
    setActive(false);
  };

  return (
    <header className={`${text_color_light}`}>
      <div className="py-3 ">
        <div className="flex justify-between max-w-5xl mx-auto px-4 ">
          {/*banner left*/}
          <Link className="flex items-center" href="/">
            <Image
              className="rounded-lg"
              src="/img/output_128.jpg"
              alt="Avatar"
              width={32}
              height={32}
            />
            <div className="font-bold text-xl ml-2 ">DoveRank</div>
          </Link>

          {/*banner right*/}
          <nav className="hidden md:flex items-center tracking-wider">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? classMenuBase + ' opacity-60' : classMenuBase}
              >
                <MenuButton title={item.title} />
              </Link>
            ))}
          </nav>

          {/*status*/}
          <button className="visible md:hidden w-5 h-5 relative" onClick={toggle}>
            <ToggleIcon icon={Bars3Icon} hidden={active} />
            <ToggleIcon icon={XMarkIcon} hidden={!active} />
          </button>

          {/*hidden menu*/}
          <Transition
            show={active}
            as="ul"
            className="p-4 absolute left-0 top-14 w-full h-full bg-slate-700 "
            enter="transition duration-[50ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-[20ms] ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div>
              {menu.map((item, index) => (
                <Transition.Child
                  key={item.href}
                  as="li"
                  enter={`transition duration-300 ${item.delay}`}
                  enterFrom="opacity-0 -translate-x-5"
                  enterTo="opacity-100 translate-x-0"
                >
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? classHiddenMenuBase + ' opacity-60'
                        : classHiddenMenuBase
                    }
                    onClick={handleLinkClick}
                  >
                    <MenuButton title={item.title} />
                  </Link>
                </Transition.Child>
              ))}
            </div>
            <div className="fixed bottom-3">DoveRank</div>
          </Transition>
        </div>
      </div>
    </header>
  );
}
