import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Details } from "@/pages/Details";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":id" element={<Details />} />
            </Route>
        </Routes>
    );
}
