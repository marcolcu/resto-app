import { Head } from '@inertiajs/react';
import { LandingPage } from '@/shadcn/component/landing-page';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome() {
    return (
        <>
            <MainLayout>
                <Head title="Resto App" />
                <div>
                    <LandingPage />
                </div>
            </MainLayout>
        </>
    );
}
