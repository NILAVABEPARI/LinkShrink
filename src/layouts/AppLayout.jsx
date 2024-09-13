import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const AppLayout = () => {

    return <div>
        <main className="min-h-screen container mx-auto">
            <Header />
            <Outlet />
        </main>
        <div className="pt-10 mt-10 text-center bg-gray-800">Made by Nilava Bepari</div>
    </div>
}

export default AppLayout;