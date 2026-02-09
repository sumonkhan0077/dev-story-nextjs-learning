import Title from "@/Components/Titel/Titel";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>this is about page</Title>
      <div className="space-x-2">

      <Link href="/about/contact">Contact</Link>
      <Link href="/about/teams">Teams</Link>
      </div>
    </div>
  );
};

export default About;
