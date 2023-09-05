import React, { useEffect } from "react";
import { addBackToTop } from "vanilla-back-to-top";

import Viewer, { Worker, defaultLayout } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

const renderToolbar = (toolbarSlot) => {
    return (
        <div
            style={{
                alignItems: "center",
                display: "flex",
                width: "100%",
            }}
        >
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: "center",
                }}
            >
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.previousPageButton}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.nextPageButton}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.zoomOutButton}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.zoomPopover}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.zoomInButton}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.fullScreenButton}
                </div>
                <div style={{ padding: "0 2px" }}>
                    {toolbarSlot.downloadButton}
                </div>
            </div>
        </div>
    );
};

const pdfViewerLayout = (
    isSidebarOpened,
    container,
    main,
    toolbar,
    sidebar
) => {
    return defaultLayout(
        isSidebarOpened,
        container,
        main,
        toolbar(renderToolbar),
        sidebar
    );
};

function IndexPage() {
    useEffect(() => {
        addBackToTop();
    }, []);

    return (
        <Layout>
            <SEO
                keywords={[
                    `The Answer To Crime`,
                    `answer to crime`,
                    `solve crime`,
                    `michael j. curls`,
                    `Michael J. Curls`,
                ]}
                title="Home"
            />
            <h1
                style={{ fontFamily: "Georgia" }}
                className="text-5xl font-bold text-center"
            >
                Michael J. Curls
            </h1>
            <h2
                style={{ fontFamily: "Georgia" }}
                className="text-4xl font-medium text-center"
            >
                The Answer To Crime
            </h2>
            <section>
                {/* <img src={cover} alt="" /> */}
                <div className="my-4" id="answer">
                    <Worker>
                        <div className="h-screen">
                            <Viewer
                                fileUrl="/the-answer-49-pgs-09052023.pdf"
                                layout={pdfViewerLayout}
                                defaultScale={0.6}
                            />
                        </div>
                    </Worker>
                </div>
            </section>
            <section id="clemency">
                {/* <img src={cover} alt="" /> */}
                <div className="my-4" id="answer">
                    <Worker>
                        <div className="h-screen">
                            <Viewer
                                fileUrl="/clemency-petition-09052023.pdf"
                                layout={pdfViewerLayout}
                                defaultScale={0.6}
                            />
                        </div>
                    </Worker>
                </div>
            </section>
        </Layout>
    );
}

export default IndexPage;
