import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-[#12141a] border border-[#232733] rounded-xl  m-4 md:m-8">
            <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">

                {/* Hero Left */}
                <div>
                    <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#ccff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-2xl text-4xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <Link href="#library" className="mt-8 inline-flex items-center gap-2 bg-[#ccff00] px-6 py-3 font-bold uppercase text-black transition hover:bg-[#b8e600]">
                        Browse Workouts
                        <span>→</span>
                    </Link>
                </div>

                {/* Hero Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/asset/banner.png"
                        alt="FitLog workout banner"
                        width={600}
                        height={600}
                        priority
                        className="h-auto w-full max-w-md object-contain lg:max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
