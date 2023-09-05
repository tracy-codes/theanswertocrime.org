import Header from "./header";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
            <Header />
            <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;
