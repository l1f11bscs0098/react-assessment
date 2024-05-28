import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/Navbar";

export function Layout() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
                <div className="flex-1 bg-slate-50">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
