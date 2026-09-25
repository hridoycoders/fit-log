export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-black px-4">
            <div className="text-center">
                <p className="text-7xl font-black text-[#ccff00]">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold uppercase text-white md:text-3xl">
                    Workout Not Found
                </h1>

                <p className="mt-3 text-gray-400">
                    The page you are looking for doesn't exist.
                </p>

                <a href="/"
                    className="mt-8 inline-block bg-[#ccff00] px-6 py-3 font-bold uppercase text-black transition hover:bg-white"
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}