import Banner from "@/components/banner"
import TeamSection from "@/components/TeamSection"

// Sample team data that matches the image
const teamMembers = [
  {
    name: "Dinesh Kumar",
    role: "Founder & Promoter (MD)",
    image: "/image/team/SEVNOO01.jpg",
    team: "Owner",
  },
  {
    name: "Amit Balotiya",
    role: "Founder & Promoter (CEO)",
    image: "/image/team/SEVNOO02.png",
    team: "Owner",
  },
]
const bannerSlides = [
    {
      image: "/image/5.jpg",
      title: "Web Development Services",
      description: "Create responsive and dynamic websites that drive results",
    },
  ]
const Team = () => {
  return (
    <div className="">
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
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md"
              >
                View Open Positions
              </a>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400?text=Join+Our+Team"
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
