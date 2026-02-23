"use client"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import * as db from "../../database";
import Modules from "./modules/page";
import Breadcrumb from "./Breadcrumb";
import { link } from "fs";

export default function CourseNavigation() {

  const { cid } = useParams();
  const pathname = usePathname();
  const course = db.courses.find((course) => course._id === cid);
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];

 

  return (
     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
     <Breadcrumb course={course} />
     {links.map((link) => { 
      const ending = link === "People" ? "people/table" : link.toLowerCase();
      const href = `/courses/${cid}/${ending}`;
      const active  = pathname.toLowerCase().includes(link.toLowerCase());
      return (
        <Link key={link} href={href} className={`list-group-item border-0 ${active ? "active" : "text-danger"}`}>
          {link}
        </Link>
      );

      })}
      </div>
  );}
     

