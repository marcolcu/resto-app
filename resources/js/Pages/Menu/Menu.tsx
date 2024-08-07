import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { MenuPage } from '@/shadcn/component/menu-page';

export default function Welcome() {
    return (
        <>
            <MainLayout>
                <Head title="Menu" />
                <div>
                    <MenuPage />
                </div>
            </MainLayout>
        </>
    );
}
