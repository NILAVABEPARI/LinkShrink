import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppLayout = () => {

    return <div>
        <main className="min-h-screen container mx-auto">
            <Header />
            <Outlet />
        </main>
        <Footer />
    </div>
}

export default AppLayout;