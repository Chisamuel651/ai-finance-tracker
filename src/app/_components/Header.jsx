'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex flex-row items-center">
                {/* logo */}
                <Image src={'/logo.svg'} alt="logo" width={60} height={45} />
                <span className="text-[#ef233c] font-bold text-2xl">
                    Finanzer
                </span>
            </div>

            {isSignedIn ? (<UserButton />): (
            <div className="flex gap-3 items-center">
                <Link href="/dashboard">
                    <Button variant='outline' className='rounded-full cursor-pointer'>
                        Dashboard
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button className='rounded-full cursor-pointer'>
                        Get Started
                    </Button>
                </Link>
            </div> )}
        </div>
    )
}

export default Header;