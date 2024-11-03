"use client";
import React, { useEffect, useState } from "react";

import { useBlogsStore } from "@/app/apis/stores/blogsStore";
import Container from "../commons/Container";

const BlogCollections = () => {
  const [blogCollections, setBlogCollections] = useState<any>([]);
  return (
    <div>
      <Container>blog collection</Container>
    </div>
  );
};

export default BlogCollections;
