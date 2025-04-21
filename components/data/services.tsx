// Example service data structure
// Replace with your actual service data

interface Service {
    id: string | number
    name: string
    link: string
  }
  
  export const Api: Service[] = [
    { id: "api1", name: "REST API Development", link: "/services/api/rest" },
    { id: "api2", name: "GraphQL API", link: "/services/api/graphql" },
  ]
  
  export const Banking: Service[] = [
    { id: "banking1", name: "Payment Gateway Integration", link: "/services/banking/payment" },
    { id: "banking2", name: "Banking Solutions", link: "/services/banking/solutions" },
  ]
  
  export const Game: Service[] = [
    { id: "game1", name: "Game Development", link: "/services/game/development" },
    { id: "game2", name: "Game Design", link: "/services/game/design" },
  ]
  
  export const Software: Service[] = [
    { id: "software1", name: "Custom Software Development", link: "/services/software/custom" },
    { id: "software2", name: "Enterprise Solutions", link: "/services/software/enterprise" },
  ]
  
  export const MobileDevlopment: Service[] = [
    { id: "mobile1", name: "iOS App Development", link: "/services/mobile/ios" },
    { id: "mobile2", name: "Android App Development", link: "/services/mobile/android" },
  ]
  
  export const WebDevlopment: Service[] = [
    { id: "web1", name: "Frontend Development", link: "/services/web/frontend" },
    { id: "web2", name: "Backend Development", link: "/services/web/backend" },
  ]
  
  export const Otherserivces: Service[] = [
    { id: "other1", name: "UI/UX Design", link: "/services/other/design" },
    { id: "other2", name: "Digital Marketing", link: "/services/other/marketing" },
  ]
  
  export const Solutions: Service[] = [
    { id: "solution1", name: "E-commerce Solutions", link: "/services/solutions/ecommerce" },
    { id: "solution2", name: "CRM Solutions", link: "/services/solutions/crm" },
  ]
  