import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs';
import UserMenu, {userMenu} from "./userMenu.jsx"

const Header = () => {
  return (
    <nav className="mx-auto py-3 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <p className="text-3xl font-semibold text-blue-400">𝕾𝖈𝖍𝖊𝖉𝖚𝖑𝖎𝖝</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/events?create=true">
          <Button className="flex items-center gap-2">
            <PenBox size={1} />
            Create Event
          </Button>
        </Link>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">LogIn</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu/>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Header
