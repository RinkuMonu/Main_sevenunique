import React from "react";

interface TeamMember {
  image: string;
  name: string;
  role: string;
  team: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const categorizedTeams: { [category: string]: TeamMember[] } = {
    "Founder & Promoter": [],
    "Our Dedicated Team": [],
    "Meet Our Team": [],
    "Developer Team": [],
  };

  teamMembers.forEach((member) => {
    if (member.team === "Owner") {
      categorizedTeams["Founder & Promoter"].push(member);
    } else if (member.team === "Dedicated") {
      categorizedTeams["Our Dedicated Team"].push(member);
    } else if (member.team === "Other") {
      const developerKeywords = [
        "developer",
        "mern",
        "ui-ux",
        "full stack",
        "react",
        "graphic",
        "seo",
        "content",
      ];

      const isDeveloper = developerKeywords.some((keyword) =>
        member.role.toLowerCase().includes(keyword)
      );

      if (isDeveloper) {
        categorizedTeams["Developer Team"].push(member);
      } else {
        categorizedTeams["Meet Our Team"].push(member);
      }
    }
  });

  const teamDisplayOrder = [
    "Founder & Promoter",
    "Our Dedicated Team",
    "Meet Our Team",
    "Developer Team",
  ];

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {teamDisplayOrder.map((category) => {
          const members = categorizedTeams[category];
          if (!members || members.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 capitalize">{category}</h2>
              <div className="flex flex-wrap -mx-4 justify-center">
                {members.map((member, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
                    <div className="bg-white shadow-sm rounded-lg text-center h-full p-4">
                      <div className="mx-auto mb-4 w-[140px] h-[140px]">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-full border-4"
                          style={{
                            objectFit: "scale-down",
                            backgroundColor: "#deddd4",
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-bold uppercase mb-1">{member.name}</h3>
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-0.5 bg-yellow-400"></div>
                      </div>
                      <p className="text-gray-500 mb-2">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
