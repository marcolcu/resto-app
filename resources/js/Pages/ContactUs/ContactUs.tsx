import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { ContactUsPage } from '@/shadcn/component/contact-us-page';

export default function ContactUs() {
    return (
        <>
            <MainLayout>
                <Head title="Resto App" />
                <div>
                    <ContactUsPage />
                </div>
            </MainLayout>
        </>
    );
}
