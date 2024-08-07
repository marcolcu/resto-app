import { Head } from '@inertiajs/react';
import { LandingPage } from '@/shadcn/component/landing-page';
import MainLayout from '@/Layouts/MainLayout';
import { TableReservationPage } from '@/shadcn/component/table-reservation-page';

export default function TableReservation() {
    return (
        <>
            <MainLayout>
                <Head title="Resto App" />
                <div>
                    <TableReservationPage />
                </div>
            </MainLayout>
        </>
    );
}
