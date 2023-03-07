import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const head_foot_color = 'bg-slate-600';

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
      className="w-5 h-5 absolute top-0 left-0 transition duration-150 opacity-100 scale-100 data-[hidden=true]:invisible data-[hidden=true]:opacity-0 data-[hidden=true]:scale-0"
      data-hidden={hidden}
    />
  );
};

// todo
export default function Header() {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  const handleLinkClick = () => {
    setActive(false);
  };

  return (
    <header className={`${head_foot_color}`}>
      <div className="py-3 border-b text-gray-200">
        <div className="flex justify-between max-w-5xl mx-auto px-4 ">
          <Link className="flex items-center" href="/">
            <Image
              className="rounded-lg"
              src="/img/output_128.jpg"
              alt="Avatar"
              width={32}
              height={32}
            />
            <p className="ml-2 font-bold text-xl ">DoveRank</p>
          </Link>
          <nav className="hidden md:flex items-center tracking-wider">
            {menu.map((item) => (
              <Link
                key={item.href}
                className="flex items-center hover:opacity-60 after:content-['|'] after:mx-3 after:text-gray-300 after:text-sm last:after:hidden"
                href={item.href}
              >
                <img
                  className="rounded-lg mr-2"
                  src={`/icon/${item.title.toLowerCase()}.svg`}
                  alt={item.title}
                  width={20}
                  height={20}
                />
                {item.title}
              </Link>
            ))}
          </nav>
          <button className="visible md:hidden w-5 h-5 relative" onClick={toggle}>
            <ToggleIcon icon={Bars3Icon} hidden={active} />
            <ToggleIcon icon={XMarkIcon} hidden={!active} />
          </button>
          <Transition
            show={active}
            as="ul"
            className="flex flex-col space-y-2 p-4 absolute left-0 top-10 w-full h-screen bg-white"
            enter="transition duration-[50ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-[20ms] ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {menu.map((item, index) => (
              <Transition.Child
                key={item.href}
                as="li"
                enter={`transition duration-300 ${item.delay}`}
                enterFrom="opacity-0 -translate-x-5"
                enterTo="opacity-100 translate-x-0"
              >
                <Link
                  className="block py-4 px-2 text-sm font-semibold text-gray-600"
                  href={item.href}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              </Transition.Child>
            ))}
          </Transition>
        </div>
      </div>
    </header>
  );
}
