import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { SpecialPage } from '@/shadcn/component/special-page';

export default function Special() {
    return (
        <>
            <MainLayout>
                <Head title="Resto App" />
                <div>
                    <SpecialPage />
                </div>
            </MainLayout>
        </>
    );
}
