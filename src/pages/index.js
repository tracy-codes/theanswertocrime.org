import React, { useEffect } from "react";
import { addBackToTop } from "vanilla-back-to-top";

import Viewer, { Worker, defaultLayout } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import page1 from "../images/1.jpg";
import page2 from "../images/2.jpg";
import page3 from "../images/3.jpg";
import page4 from "../images/4.jpg";
import page5 from "../images/5.jpg";
import page6 from "../images/6.jpg";
import page7 from "../images/7.jpg";
import page8 from "../images/8.jpg";
import page9 from "../images/9.jpg";
import page10 from "../images/10.jpg";
import page11 from "../images/11.jpg";
import page12 from "../images/12.jpg";
import page13 from "../images/13.jpg";
import page14 from "../images/14.jpg";
import page15 from "../images/15.jpg";
import page16 from "../images/16.jpg";
import page17 from "../images/17.jpg";
import page18 from "../images/18.jpg";
import page19 from "../images/19.jpg";
import page20 from "../images/20.jpg";
import page21 from "../images/21.jpg";
import page22 from "../images/22.jpg";
import page23 from "../images/23.jpg";
import page24 from "../images/24.jpg";
import page25 from "../images/25.jpg";
import page26 from "../images/26.jpg";
import page27 from "../images/27.jpg";
import page28 from "../images/28.jpg";
import page29 from "../images/29.jpg";

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
        <div style={{ padding: "0 2px" }}>{toolbarSlot.previousPageButton}</div>
        <div style={{ padding: "0 2px" }}>
          {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
        </div>
        <div style={{ padding: "0 2px" }}>{toolbarSlot.nextPageButton}</div>
        <div style={{ padding: "0 2px" }}>{toolbarSlot.zoomOutButton}</div>
        <div style={{ padding: "0 2px" }}>{toolbarSlot.zoomPopover}</div>
        <div style={{ padding: "0 2px" }}>{toolbarSlot.zoomInButton}</div>
        <div style={{ padding: "0 2px" }}>{toolbarSlot.fullScreenButton}</div>
        <div
          style={{ padding: "0 2px" }}
          onClick={() =>
            window.gtag("event", "click", {
              event_category: "button_click",
              event_label: "Download Book",
              value: 1,
            })
          }
        >
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
                fileUrl="/the-answer-full.pdf"
                layout={pdfViewerLayout}
                defaultScale={0.6}
              />
            </div>
          </Worker>
        </div>
      </section>
      <section className="text-center" id="clemency">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <img src={page3} alt="" />
        <img src={page4} alt="" />
        <img src={page5} alt="" />
        <img src={page6} alt="" />
        <img src={page7} alt="" />
        <img src={page8} alt="" />
        <img src={page9} alt="" />
        <img src={page10} alt="" />
        <img src={page11} alt="" />
        <img src={page12} alt="" />
        <img src={page13} alt="" />
        <img src={page14} alt="" />
        <img src={page15} alt="" />
        <img src={page16} alt="" />
        <img src={page17} alt="" />
        <img src={page18} alt="" />
        <img src={page19} alt="" />
        <img src={page20} alt="" />
        <img src={page21} alt="" />
        <img src={page22} alt="" />
        <img src={page23} alt="" />
        <img src={page24} alt="" />
        <img src={page25} alt="" />
        <img src={page26} alt="" />
        <img src={page27} alt="" />
        <img src={page28} alt="" />
        <img src={page29} alt="" />
      </section>
    </Layout>
  );
}

export default IndexPage;
