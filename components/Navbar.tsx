import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import testLogo from '@/public/icons/testlogo.png';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={testLogo}
          width={60}
          height={30}
          alt="TestLogo"
          className=""
        />
        <div className="flex flex-col">
          <p className="text-white font-bold text-2xl">Meeting-App</p>
          <p className="text-white font-thin">Developed By Subrat</p>
        </div>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
