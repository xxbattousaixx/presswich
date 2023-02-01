import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Blogs1 from "components/blogs/Blogs1.js";
import Blogs2 from "components/blogs/Blogs2.js";
import Blogs3 from "components/blogs/Blogs3.js";
import Blogs4 from "components/blogs/Blogs4.js";
import Blogs5 from "components/blogs/Blogs5.js";
import Blogs6 from "components/blogs/Blogs6.js";
import Blogs7 from "components/blogs/Blogs7.js";

function BlogsSection() {
  return (
    <>
      <div style={{backgroundColor:'orange'}} className="cd-section" id="blogs">
        <Blogs4/>
        <Blogs1/>
      </div>
    </>
  );
}

export default BlogsSection;
