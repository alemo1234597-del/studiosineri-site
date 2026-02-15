import { notFound } from "next/navigation";
import ImpreseView from "@/components/services/views/ImpreseView";
import PrivatiView from "@/components/services/views/PrivatiView";
import NotaiView from "@/components/services/views/NotaiView";
import AmministratoriView from "@/components/services/views/AmministratoriView";
import CommercialiView from "@/components/services/views/CommercialiView";
import AgenzieView from "@/components/services/views/AgenzieView";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Map slugs to components
const serviceViews = {
    imprese: ImpreseView,
    privati: PrivatiView,
    notai: NotaiView,
    amministratori: AmministratoriView,
    commerciali: CommercialiView,
    agenzie: AgenzieView,
};

// Define valid slugs for static generation (optional but good for performance)
export async function generateStaticParams() {
    return Object.keys(serviceViews).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const ViewComponent = serviceViews[slug as keyof typeof serviceViews];

    if (!ViewComponent) {
        notFound();
    }

    return (
        <main className="bg-background-dark min-h-screen">
            <Navbar variant={slug} />
            <ViewComponent />
            <Footer />
        </main>
    );
}
