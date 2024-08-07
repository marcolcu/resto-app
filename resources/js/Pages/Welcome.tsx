import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { WelcomePage } from '@/shadcn/component/welcome-page';

export default function Welcome() {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div>
                <WelcomePage />
            </div>
        </>
    );
}
