"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./team.css"; // Optional, if needed for global styles
import { usePathname } from "next/navigation";

function Team({ limit }: { limit: number }) {
  const Baseurl = "/image/team/";
  const router = useRouter();

  const employees = [
    {
      id: "SEVNOO01",
      name: "Dinesh Kumar",
      designation: "Founder & Promoter (MD)",
      team: "Owner",
    },
    {
      id: "SEVNOO02",
      name: "Amit Balotiya",
      designation: "Founder & Promoter (CEO)",
      team: "Owner",
    },
    {
      id: "SEVNOO05",
      name: "Kamlesh Meena",
      designation: "Senior business development manager",
      team: "Dedicated",
    },
    {
      id: "SEVNOO03",
      name: "Bhavika Manghnani",
      designation: "Human Resources Manager",
      team: "Dedicated",
    },
    {
      id: "SEVNOO04",
      name: "Vimal Verma",
      designation: "Manager",
      team: "Dedicated",
    },
    {
      id: "SEVNOO07",
      name: "Rahul Prajapat",
      designation: "MD Right Operator",
      team: "Dedicated",
    },
    {
      id: "SEVNOO08",
      name: "Pawan Ujjiniya",
      designation: "MD Left Operator",
      team: "Dedicated",
    },
    {
      id: "SEVNOO10",
      name: "Mohit Balotiya",
      designation: "Sr. Relationship Manager (SRM)",
      team: "Other",
    },
    {
      id: "SEVNOO09",
      name: "Krishan Parjapat",
      designation: "Relationship Manager",
      team: "Other",
    },
    {
      id: "SEVNOO23",
      name: "Vishnu Swami",
      designation: "Relationship Manager",
      team: "Other",
    },
    {
      id: "SEVNOO13",
      name: "Rekha Meena",
      designation: "Front Desk",
      team: "Other",
    },
    {
      id: "SEVNOO17",
      name: "Vijay Gupta",
      designation: "Full Stack Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO06",
      name: "Aadarsh Patel",
      designation: "Full Stack Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO26",
      name: "Rajyvardhan Singh Rathore",
      designation: "Full stack Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO21",
      name: "Rinku Yadav",
      designation: "Mern Stack",
      team: "Developer",
    },
    {
      id: "SEVNOO11",
      name: "Himanshu Yaduvanshi",
      designation: "Graphic Designer",
      team: "Other",
    },
    {
      id: "SEVNOO18",
      name: "Rahul Singh",
      designation: "Mern Stack",
      team: "Developer",
    },
    {
      id: "SEVNOO22",
      name: "Nandini Lodha",
      designation: "Front-end Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO20",
      name: "Priyanshi Bansal",
      designation: "React Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO27",
      name: "Ranjay Kumar",
      designation: "React Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO15",
      name: "Anisha Panwar",
      designation: "Jr. Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO14",
      name: "Devika Chhipa",
      designation: "Jr. Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO16",
      name: "Kanak Sharma",
      designation: "Ui-Ux Developer",
      team: "Developer",
    },
    {
      id: "SEVNOO25",
      name: "Chandan Sharma",
      designation: "SEO Executive ",
      team: "Other",
    },
    {
      id: "SEVNOO24",
      name: "Vishal Prajapat",
      designation: "Tally Executive",
      team: "Other",
    },
    {
      id: "vivek-photo",
      name: "Vivek Singh",
      designation: "Content Writer",
      team: "Other",
    },
 
  ];
  const pathname = usePathname();

  const developerTeam = employees.filter((e) => e.team === "Developer");
  const dedicatedTeams = employees.filter((e) => e.team === "Dedicated");
  const otherTeams = employees.filter((e) => e.team === "Other");
  const ownerTeams = employees.filter((e) => e.team === "Owner");

  const socialLinks = (
    <div className="flex justify-center gap-4 mt-2 text-xl text-gray-600">
      <a
        href="https://www.facebook.com/people/SevenUnique-Tech-Solutions-Pvtltd/61556669918427/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/sevenuniquetech/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://x.com/sevenuniqu42041" target="_blank" rel="noreferrer">
        <i className="bi bi-twitter-x"></i>
      </a>
    </div>
  );

  const renderTeam = (teamArray: any[]) =>
    teamArray.map((employee) => (
      <div
        className="team-profile bg-white rounded-lg shadow-md p-4 text-center mb-16"
        key={employee.id}
      >
        <div className="team-img mb-4">
          <img
            className="w-32 h-32 object-cover rounded-full mx-auto"
            src={`${Baseurl}${employee.id}.webp`}
            alt={employee.name}
          />
        </div>
        <div className="team-designation">
          <h3 className="text-lg font-semibold">{employee.name}</h3>
          <p className="text-sm text-gray-600">{employee.designation}</p>
          {socialLinks}
        </div>
      </div>
    ));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex  gap-1 mb-16 justify-center">
        {renderTeam(limit ? ownerTeams.slice(0, limit) : ownerTeams)}
      </div>

      {limit && pathname === "/" ? (
        <div className="text-center">
          <button
            onClick={() => router.push("/team-member")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            More Team
          </button>
        </div>
      ) : (
        <>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-black">
              Our Dedicated Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {renderTeam(dedicatedTeams)}
          </div>

          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-black">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {renderTeam(otherTeams)}
          </div>

          <div className="text-center my-10">
            <h2 className="text-4xl font-bold">Developer Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {renderTeam(developerTeam)}
          </div>
        </>
      )}
    </div>
  );
}

export default Team;
