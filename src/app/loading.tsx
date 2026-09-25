export default function Loading() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center bg-black">
            <div className="text-center">
                <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-400">
                    Loading workouts...
                </p>
            </div>
        </div>
    );
}