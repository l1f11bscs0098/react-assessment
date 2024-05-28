import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export function Navbar() {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
            <MaxWidthWrapper className="flex items-center">
                <Link to="/" className="text-primary text-lg flex items-center gap-x-2 font-semibold">
                    <FaGithub size={18} /> Gists Finder
                </Link>
            </MaxWidthWrapper>
        </nav>
    );
}
