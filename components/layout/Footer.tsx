import Link from "next/link";
import { DraftingCompass } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background-darker border-t border-white/5 py-12 text-sm text-white/30">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <DraftingCompass className="text-white/60 w-6 h-6" />
                    <span className="font-bold text-white text-lg">APEX</span>
                </div>
                <div className="flex gap-8">
                    <Link className="hover:text-white transition-colors" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="hover:text-white transition-colors" href="#">
                        Termini di Servizio
                    </Link>
                    <Link className="hover:text-white transition-colors" href="#">
                        Lavora con Noi
                    </Link>
                </div>
                <p>© 2023 Apex Surveying S.r.l. - P.IVA 12345678901</p>
            </div>
        </footer>
    );
}
