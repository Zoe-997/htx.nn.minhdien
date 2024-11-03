"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useBlogsStore } from "@/app/apis/stores/blogsStore";
import Container from "../commons/Container";

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const { getAllBlogs } = useBlogsStore();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setBlogs(res.data);
    };
    getAllBlogs("", onSuccess);
  }, [getAllBlogs]);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-x-10 gap-y-20">
          {blogs?.map((blog: any, index: number) => (
            <Link
              href={`/blogs/${blog.collection.handle}/${blog.handle}`}
              key={index}
              className="group"
            >
              <div className="relative pb-[65%] rounded-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  fill
                  className="object-cover group-hover:scale-[115%] transition-all duration-500"
                />
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">{blog.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogsGrid;
