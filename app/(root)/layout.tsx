import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({children}:{children:ReactNode}) =>{
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect('/sign-in');
    return(
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={38} height={32}></Image>
                <h2 className="text-primary-100">Hire Flow</h2>
                </Link>
            </nav>
            {children}
        </div>
    )
}

export default RootLayout