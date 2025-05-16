import Banner from "@/components/banner"
import TeamSection from "@/components/TeamSection"
import seoConfig from "../seoConfig";
import SEO from "@/components/SEO/SEO";


const teamMembers = [
  {
    name: "Dinesh Kumar",
    role: "Founder & Promoter (MD)",
    image: "/image/team/SEVNOO01.webp",
    team: "Owner",
  },
  {
    name: "Amit Balotiya",
    role: "Founder & Promoter (CEO)",
    image: "/image/team/SEVNOO02.webp",
    team: "Owner",
  },
  {
    name: "Vimal Verma",
    role: "Vice President",
    image: "/image/team/SEVNOO04.webp",
    team: "Dedicated",
  },
  {
    name: "Kamlesh Meena",
    role: "Senior Business Development Manager",
    image: "/image/team/SEVNOO05.webp",
    team: "Dedicated",
  },
  {
    name: "Bhavika Manghnani",
    role: "Human Resources Manager",
    image: "/image/team/SEVNOO03.webp",
    team: "Dedicated",
  },

  {
    name: "Rahul Prajapat",
    role: "MD Right Operator",
    image: "/image/team/SEVNOO07.webp",
    team: "Dedicated",
  },
  {
    name: "Pawan Ujjiniya",
    role: "MD Left Operator",
    image: "/image/team/SEVNOO08.webp",
    team: "Dedicated",
  },

  {
    name: "Mohit Balotiya",
    role: "Sr. Relationship Manager",
    image: "/image/team/SEVNOO10.webp",
    team: "Other",
  },
  {
    name: "Krishan Parjapat",
    role: "Administration",
    image: "/image/team/SEVNOO09.webp",
    team: "Other",
  },
  {
    name: "Parveen Gupta",
    role: "Sales Manager",
    image: "/image/team/photo.webp",
    team: "Other",
  },
  {
    name: "Vishnu Swami",
    role: "Relationship Manager",
    image: "/image/team/SEVNOO23.webp",
    team: "Other",
  },
  {
    name: "Rekha Meena",
    role: "Front Desk",
    image: "/image/team/SEVNOO13.webp",
    team: "Other",
  },
  {
    name: "Vijay Gupta",
    role: "Full Stack Developer",
    image: "/image/team/SEVNOO17.webp",
    team: "Other",
  },
  {
    name: "Aadarsh Patel",
    role: "Full Stack Developer",
    image: "/image/team/SEVNOO06.webp",
    team: "Other",
  },
  {
    name: "Rajyvardhan Singh Rathore",
    role: "Full stack Developer",
    image: "/image/team/SEVNOO26.webp",
    team: "Other",
  },
  {
    name: "Nandini Lodha",
    role: "Front-end Developer",
    image: "/image/team/SEVNOO22.webp",
    team: "Other",
  },
  {
    name: "Rinku Yadav",
    role: "Mern Stack",
    image: "/image/team/SEVNOO21.webp",
    team: "Other",
  },
  {
    name: "Himanshu Yaduvanshi",
    role: "Graphic Designer",
    image: "/image/team/SEVNOO11.webp",
    team: "Other",
  },
  {
    name: "Rahul Singh",
    role: "Mern Stack",
    image: "/image/team/SEVNOO18.webp",
    team: "Other",
  },
  {
    name: "Priyanshi Bansal",
    role: "React Developer",
    image: "/image/team/SEVNOO20.webp",
    team: "Other",
  },
  {
    name: "Ranjay Kumar",
    role: "React Developer",
    image: "/image/team/SEVNOO27.webp",
    team: "Other",
  },
  {
    name: "Anisha Panwar",
    role: "Jr. Developer",
    image: "/image/team/SEVNOO15.webp",
    team: "Other",
  },
  {
    name: "Devika Chhipa",
    role: "Jr. Developer",
    image: "/image/team/SEVNOO14.webp",
    team: "Other",
  },
  {
    name: "Kanak Sharma",
    role: "Ui-Ux Developer",
    image: "/image/team/SEVNOO16.webp",
    team: "Other",
  },
  {
    name: "Chandan Sharma",
    role: "SEO Executive ",
    image: "/image/team/SEVNOO25.webp",
    team: "Other",
  },
  {
    name: "Vishal Prajapat",
    role: "Tally Executive",
    image: "/image/team/SEVNOO24.webp",
    team: "Other",
  },
  {
    name: "Vivek Singh",
    role: "Content Writer",
    image: "/image/team/vivek-photo.webp",
    team: "Other",
  },
]
const bannerSlides = [
    {
      image: "/image/banner/Our-Team.jpg",
      title: "Web Development Services",
      description: "Create responsive and dynamic websites that drive results",
    },
  ]
const Team = () => {
  return (
    <div className="">
          <SEO  />
      {/* Banner Section */}
      <Banner slides={bannerSlides}   />
      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />

      {/* Values Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Our Values</h2>
            <p className="text-gray-600 mx-auto max-w-2xl">
              These core values guide everything we do and define our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "bi-star",
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from the solutions we develop to the service we provide.",
              },
              {
                icon: "bi-people",
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and collaboration to achieve the best results for our clients.",
              },
              {
                icon: "bi-lightbulb",
                title: "Innovation",
                description:
                  "We embrace innovation and continuously seek new and better ways to solve problems and create value.",
              },
              {
                icon: "bi-heart",
                title: "Integrity",
                description: "We conduct our business with the highest level of integrity, honesty, and transparency.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                <i className={`bi ${value.icon} text-4xl text-yellow-500 mb-4`}></i>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. If you're passionate about technology
                and innovation, we'd love to hear from you.
              </p>
              <a
                href="/career"
                className="inline-block bg-[#e8ab8f] hover:bg-[#e1926e] text-white font-medium py-2 px-8 rounded-sm "
              >
                View Open Positions
              </a>
            </div>
            <div>
              <img
                src="/image/team.jpg"
                alt="Join Our Team"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
