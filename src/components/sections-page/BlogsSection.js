import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Blogs1 from "components/blogs/Blogs1.js";
import Blogs4 from "components/blogs/Blogs4.js";

function BlogsSection() {
  return (
    <>
      <div style={{backgroundColor:'#ffffcc'}} className="cd-section" id="blogs">
        <Blogs4/>
        
        <Blogs1/>
      </div>
      
    </>
  );
}

export default BlogsSection;
