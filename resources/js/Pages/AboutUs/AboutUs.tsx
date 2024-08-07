import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { AboutUsPage } from '@/shadcn/component/about-us-page';

export default function AboutUs() {
    return (
        <>
            <MainLayout>
                <Head title="Resto App" />
                <div>
                    <AboutUsPage />
                </div>
            </MainLayout>
        </>
    );
}
