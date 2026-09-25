import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/asset/logo.png"
                        alt="FitLog Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <span className="text-2xl font-bold tracking-wider text-white">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </Link>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-500 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;