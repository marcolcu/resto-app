import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="/" className="flex items-center justify-center">
                    <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
                        Resto App
                    </h1>
                    <span className="sr-only">Acme Restaurant</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/menu" className="text-sm font-medium hover:underline underline-offset-4">
                        Menu
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Specials
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
