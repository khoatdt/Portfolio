"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import { Introduction } from "./Introduction";
import { About } from "./About";
import { Contact } from "./Contact";

export function PageScroll() {
  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      scrollHorizontally={true}
      scrollingSpeed={700} // Tốc độ scroll (miliseconds)
      credits={{
        enabled: false, // Hoặc true nếu bạn muốn hiển thị credits
        label: "", // Tùy chỉnh nội dung credits (ví dụ: "My Portfolio")
      }}
      // Render sections
      render={() => (
        <ReactFullpage.Wrapper>
          {/* Section 1: Introduction */}
          <div className="section">
            <Introduction />
          </div>

          {/* Section 2: About */}
          <div className="section">
            <About />
          </div>

          {/* Section 3: Contact */}
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default PageScroll;
