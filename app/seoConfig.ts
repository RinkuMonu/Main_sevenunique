// seoConfig.ts
'use client'
interface SEOConfigEntry {
  title: string;
  description: string;
  keywords: string;
  url: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
}

// type SEOConfig = {
//   [path: string]: SEOConfigEntry;
// };

const seoConfig: Record<string, SEOConfigEntry> = {
  "/": {
    title: "Best Web & App Development Company in Jaipur | Sevenunique Tech",
    description: "Sevenunique Tech Solution is a Jaipur-based software company offering custom web apps, mobile apps, ERP, and scalable tech solutions for your business growth.",
    keywords: "web development, app development, software company in Jaipur, ERP, mobile apps, IT services",
    url: "https://www.sevenunique.com/",
    ogTitle: "Best Web & App Development Company in Jaipur | Sevenunique Tech",
    ogDescription: "Sevenunique Tech Solution is a Jaipur-based software company offering custom web apps, mobile apps, ERP, and scalable tech solutions for your business growth.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/about/": {
    title: "About Sevenunique Tech | Leading Software Company in Jaipur",
    description: "Learn about Sevenunique Tech Solution, a trusted software development company in Jaipur delivering innovative web, mobile, and enterprise solutions with a client-first approach.",
    keywords: "about, Sevenunique Tech, software company, web development, mobile apps, enterprise solutions, Jaipur",
    url: "https://www.sevenunique.com/about/",
    ogTitle: "About Sevenunique Tech | Leading Software Company in Jaipur",
    ogDescription: "Learn about Sevenunique Tech Solution, a trusted software development company in Jaipur delivering innovative web, mobile, and enterprise solutions with a client-first approach.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/contact/": {
    title: "Contact Sevenunique Tech | Software Company in Jaipur, Rajasthan, India",
    description: "Contact Sevenunique Tech Solution, a leading software development company in Jaipur, Rajasthan, India. Reach us via phone, email, or visit our office to discuss your next tech project.",
    keywords: "contact, Sevenunique Tech, software company, Jaipur, Rajasthan, contact details, tech project",
    url: "https://www.sevenunique.com/contact/",
    ogTitle: "Contact Sevenunique Tech | Software Company in Jaipur, Rajasthan, India",
    ogDescription: "Contact Sevenunique Tech Solution, a leading software development company in Jaipur, Rajasthan, India. Reach us via phone, email, or visit our office to discuss your next tech project.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/pricing/": {
    title: "Affordable Software Pricing | Custom Solutions in Jaipur",
    description: "Explore competitive pricing for custom software development services by Sevenunique Tech in Jaipur. Get the best value for your web & mobile app solutions.",
    keywords: "pricing, software development, custom solutions, Jaipur, affordable pricing, web apps, mobile apps",
    url: "https://www.sevenunique.com/pricing/",
    ogTitle: "Affordable Software Pricing | Custom Solutions in Jaipur",
    ogDescription: "Explore competitive pricing for custom software development services by Sevenunique Tech in Jaipur. Get the best value for your web & mobile app solutions.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/ui-ux-design/": {
    title: "UI/UX Design Services | Custom Designs in Jaipur",
    description: "Enhance user experience with top UI/UX design services by Sevenunique Tech in Jaipur. Our expert team creates intuitive, responsive, and visually appealing designs for web and mobile apps.",
    keywords: "UI/UX design, services, custom designs, Jaipur, user experience, mobile apps, web apps",
    url: "https://www.sevenunique.com/ui-ux-design/",
    ogTitle: "UI/UX Design Services | Custom Designs in Jaipur",
    ogDescription: "Enhance user experience with top UI/UX design services by Sevenunique Tech in Jaipur. Our expert team creates intuitive, responsive, and visually appealing designs for web and mobile apps.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/app-development/": {
    title: "Mobile App Development Services in Jaipur | Custom App Solutions",
    description: "Get top-notch mobile app development services in Jaipur with Sevenunique Tech. We create custom Android & iOS apps that drive business growth and enhance user engagement.",
    keywords: "mobile app development, Jaipur, Android apps, iOS apps, custom app solutions, business growth",
    url: "https://www.sevenunique.com/app-development/",
    ogTitle: "Mobile App Development Services in Jaipur | Custom App Solutions",
    ogDescription: "Get top-notch mobile app development services in Jaipur with Sevenunique Tech. We create custom Android & iOS apps that drive business growth and enhance user engagement.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/game-development/": {
    title: "Game Development Services in Jaipur | Custom Game Solutions",
    description: "Sevenunique Tech offers expert game development services in Jaipur. We create engaging, high-quality games for mobile, web, and desktop platforms with innovative designs and immersive gameplay.",
    keywords: "game development, custom game solutions, Jaipur, mobile games, web games, desktop games, immersive gameplay",
    url: "https://www.sevenunique.com/game-development/",
    ogTitle: "Game Development Services in Jaipur | Custom Game Solutions",
    ogDescription: "Sevenunique Tech offers expert game development services in Jaipur. We create engaging, high-quality games for mobile, web, and desktop platforms with innovative designs and immersive gameplay.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/web-development/": {
    title: "Web Development Services in Jaipur | Custom Websites & Solutions",
    description: "Sevenunique Tech offers expert web development services in Jaipur. We specialize in custom websites, eCommerce solutions, and scalable web applications designed to boost your business.",
    keywords: "web development, custom websites, Jaipur, eCommerce solutions, scalable web apps, business growth",
    url: "https://www.sevenunique.com/web-development/",
    ogTitle: "Web Development Services in Jaipur | Custom Websites & Solutions",
    ogDescription: "Sevenunique Tech offers expert web development services in Jaipur. We specialize in custom websites, eCommerce solutions, and scalable web applications designed to boost your business.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/software-development/": {
    title: "Software Development Services in Jaipur, Rajasthan | Custom Solutions by Sevenunique Tech",
    description: "Sevenunique Tech offers expert software development services in Jaipur, Rajasthan. We specialize in custom software, ERP solutions, CRM systems, and web & mobile apps designed for your business needs.",
    keywords: "software development, custom software, ERP solutions, CRM systems, Jaipur, mobile apps, web apps",
    url: "https://www.sevenunique.com/software-development/",
    ogTitle: "Software Development Services in Jaipur, Rajasthan | Custom Solutions by Sevenunique Tech",
    ogDescription: "Sevenunique Tech offers expert software development services in Jaipur, Rajasthan. We specialize in custom software, ERP solutions, CRM systems, and web & mobile apps designed for your business needs.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/digital-marketing/": {
    title: "Digital Marketing Services in Jaipur, Rajasthan | SEO, PPC & Social Media Solutions",
    description: "Sevenunique Tech offers professional digital marketing services in Jaipur, Rajasthan. We specialize in SEO, PPC, social media marketing, and online branding to help your business grow across India.",
    keywords: "digital marketing, SEO, PPC, social media, Jaipur, online branding, growth strategies",
    url: "https://www.sevenunique.com/digital-marketing/",
    ogTitle: "Digital Marketing Services in Jaipur, Rajasthan | SEO, PPC & Social Media Solutions",
    ogDescription: "Sevenunique Tech offers professional digital marketing services in Jaipur, Rajasthan. We specialize in SEO, PPC, social media marketing, and online branding to help your business grow across India.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/bbps-services/": {
    title: "BBPS Services in Jaipur, Rajasthan | Bill Payment Solutions by Sevenunique Tech",
    description: "Sevenunique Tech offers BBPS services in Jaipur, Rajasthan. We provide secure, reliable bill payment solutions for businesses and customers across India, ensuring seamless transactions.",
    keywords: "BBPS services, Jaipur, bill payment solutions, India, secure transactions, reliable payments",
    url: "https://www.sevenunique.com/bbps-services/",
    ogTitle: "BBPS Services in Jaipur, Rajasthan | Bill Payment Solutions by Sevenunique Tech",
    ogDescription: "Sevenunique Tech offers BBPS services in Jaipur, Rajasthan. We provide secure, reliable bill payment solutions for businesses and customers across India, ensuring seamless transactions.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/cab-booking/": {
    title: "Cab Booking Services in Jaipur, Rajasthan | Reliable Taxi Solutions by Sevenunique Tech",
    description: "Sevenunique Tech offers reliable cab booking services in Jaipur, Rajasthan. Book your ride with ease for local and outstation trips. Comfortable, safe, and affordable taxi solutions across India.",
    keywords: "cab booking, Jaipur, taxi solutions, local trips, outstation trips, safe taxi services",
    url: "https://www.sevenunique.com/cab-booking/",
    ogTitle: "Cab Booking Services in Jaipur, Rajasthan | Reliable Taxi Solutions by Sevenunique Tech",
    ogDescription: "Sevenunique Tech offers reliable cab booking services in Jaipur, Rajasthan. Book your ride with ease for local and outstation trips. Comfortable, safe, and affordable taxi solutions across India.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/food-delivery-software/": {
    title: "Food Delivery Software Development in India | Custom App Solutions by Sevenunique Tech",
    description: "Sevenunique Tech develops custom food delivery software for restaurants and startups across India. Get powerful apps with real-time tracking, online payments, and user-friendly design.",
    keywords: "food delivery software, custom app solutions, India, real-time tracking, online payments, user-friendly",
    url: "https://www.sevenunique.com/food-delivery-software/",
    ogTitle: "Food Delivery Software Development in India | Custom App Solutions by Sevenunique Tech",
    ogDescription: "Sevenunique Tech develops custom food delivery software for restaurants and startups across India. Get powerful apps with real-time tracking, online payments, and user-friendly design.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/e-commerce-portal-software/": {
    title: "E-commerce Portal Development in India | Custom E-commerce Solutions for Your Business",
    description: "Sevenunique Tech offers custom e-commerce portal development in India. Build your online store with secure payment integration, user-friendly design, real-time inventory management, and seamless shopping experience.",
    keywords: "e-commerce portal development, custom e-commerce solutions, online store, payment integration, inventory management, Jaipur, India",
    url: "https://www.sevenunique.com/e-commerce-portal-software/",
    ogTitle: "E-commerce Portal Development in India | Custom E-commerce Solutions for Your Business",
    ogDescription: "Sevenunique Tech offers custom e-commerce portal development in India. Build your online store with secure payment integration, user-friendly design, real-time inventory management, and seamless shopping experience.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/": {
    title: "IT & Software Development Services in India | Web, App, CRM, ERP & More",
    description: "Explore a wide range of IT and software development services by Sevenunique Tech. From web and mobile app development to CRM, ERP, and custom software solutions.",
    keywords: "IT services, software development, web development, app development, CRM, ERP, custom software solutions, Jaipur, India",
    url: "https://www.sevenunique.com/services/",
    ogTitle: "IT & Software Development Services in India | Web, App, CRM, ERP & More",
    ogDescription: "Explore a wide range of IT and software development services by Sevenunique Tech. From web and mobile app development to CRM, ERP, and custom software solutions.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/blog/": {
    title: "Tech & Software Development Blog | Insights by Sevenunique Tech India",
    description: "Read the latest blogs from Sevenunique Tech on software development, mobile apps, web solutions, digital marketing, fintech, and IT trends. Stay updated with expert insights, how-tos, and innovations in the tech world.",
    keywords: "tech blog, software development blog, mobile apps, web solutions, digital marketing, fintech, IT trends, Sevenunique Tech",
    url: "https://www.sevenunique.com/blog/",
    ogTitle: "Tech & Software Development Blog | Insights by Sevenunique Tech India",
    ogDescription: "Read the latest blogs from Sevenunique Tech on software development, mobile apps, web solutions, digital marketing, fintech, and IT trends. Stay updated with expert insights, how-tos, and innovations in the tech world.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/teams/": {
    title: "Meet Our Team | Experts Behind Sevenunique Tech’s Software Success",
    description: "Get to know the creative minds and technical experts driving innovation at Sevenunique Tech. Our experienced team of developers, designers, and strategists work together to deliver cutting-edge IT solutions across India.",
    keywords: "Sevenunique Tech, our team, software experts, IT solutions, developers, designers, strategists, innovation, team",
    url: "https://www.sevenunique.com/teams/",
    ogTitle: "Meet Our Team | Experts Behind Sevenunique Tech’s Software Success",
    ogDescription: "Get to know the creative minds and technical experts driving innovation at Sevenunique Tech. Our experienced team of developers, designers, and strategists work together to deliver cutting-edge IT solutions across India.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/career/": {
    title: "Careers at Sevenunique Tech | Join a Leading Software Company in India",
    description: "Explore exciting career opportunities at Sevenunique Tech, a top software development company in India. Join our team of innovators, developers, and designers to build impactful digital solutions. Apply now and grow with us!",
    keywords: "careers, Sevenunique Tech, job opportunities, software development, India, join our team, innovators, developers, designers, career growth",
    url: "https://www.sevenunique.com/career/",
    ogTitle: "Careers at Sevenunique Tech | Join a Leading Software Company in India",
    ogDescription: "Explore exciting career opportunities at Sevenunique Tech, a top software development company in India. Join our team of innovators, developers, and designers to build impactful digital solutions. Apply now and grow with us!",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/gallery/": {
    title: "Company Gallery | Inside Sevenunique Tech – Work Culture & Project Highlights",
    description: "Take a visual tour of Sevenunique Tech’s culture, workspace, team activities, and project highlights. Our gallery showcases our journey, milestones, and the people behind our innovative software solutions.",
    keywords: "company gallery, Sevenunique Tech, work culture, project highlights, team activities, office environment, milestones, software company India",
    url: "https://www.sevenunique.com/gallery/",
    ogTitle: "Company Gallery | Inside Sevenunique Tech – Work Culture & Project Highlights",
    ogDescription: "Take a visual tour of Sevenunique Tech’s culture, workspace, team activities, and project highlights."
  },
  "/privacy-policy/": {
    title: "Privacy Policy | How Sevenunique Tech Protects Your Data",
    description: "Learn how Sevenunique Tech collects, uses, and protects your personal data. Our privacy policy explains your rights, data security measures, and our commitment to safeguarding your information.",
    keywords: "privacy policy, data protection, personal data, Sevenunique Tech privacy, information security, user rights, data collection policy, data usage policy",
    url: "https://www.sevenunique.com/privacy-policy/",
    ogTitle: "Privacy Policy | How Sevenunique Tech Protects Your Data",
    ogDescription: "Learn how Sevenunique Tech collects, uses, and protects your personal data. Our privacy policy explains your rights, data security measures, and our commitment to safeguarding your information.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/cancellation-refund/": {
    title: "Cancellation & Refund Policy | Sevenunique Tech Software Services",
    description: "Understand the cancellation and refund policy for software development and digital services provided by Sevenunique Tech. We ensure fair and transparent processes for every project and payment.",
    keywords: "cancellation policy, refund policy, Sevenunique Tech services, software refund, service cancellation, payment policy, development services refund, digital service terms",
    url: "https://www.sevenunique.com/cancellation-refund/",
    ogTitle: "Cancellation & Refund Policy | Sevenunique Tech Software Services",
    ogDescription: "Understand the cancellation and refund policy for software development and digital services provided by Sevenunique Tech. We ensure fair and transparent processes for every project and payment.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/terms-of-use/": {
    title: "Terms of Use | User Agreement for Sevenunique Tech Website & Services",
    description: "Review the terms and conditions for using Sevenunique Tech's website and services. This agreement outlines user responsibilities, limitations, and legal obligations when accessing our digital products.",
    keywords: "terms of use, user agreement, Sevenunique Tech policies, service terms, website terms, user responsibilities, legal terms, digital product usage",
    url: "https://www.sevenunique.com/terms-of-use/",
    ogTitle: "Terms of Use | User Agreement for Sevenunique Tech Website & Services",
    ogDescription: "Review the terms and conditions for using Sevenunique Tech's website and services. This agreement outlines user responsibilities, limitations, and legal obligations when accessing our digital products.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/grocery-software/": {
    title: "Custom Grocery Delivery App Development in India | Online Grocery Software Solutions",
    description: "Build your own grocery delivery app with Sevenunique Tech. We offer grocery ordering & delivery software with real-time tracking, inventory control, and multi-store support for businesses across India.",
    keywords: "grocery delivery app, grocery software, grocery app development India, online grocery solution, multi-store grocery software, real-time tracking, inventory management, grocery ordering system",
    url: "https://www.sevenunique.com/services/grocery-software/",
    ogTitle: "Custom Grocery Delivery App Development in India | Online Grocery Software Solutions",
    ogDescription: "Build your own grocery delivery app with Sevenunique Tech. We offer grocery ordering & delivery software with real-time tracking, inventory control, and multi-store support for businesses across India.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/home-service-software/": {
    title: "Home Service Booking Software in India | App Development for On-Demand Services",
    description: "Launch your own home service app with Sevenunique Tech. We build custom software for on-demand services like plumbing, salon, electricians, and cleaning with real-time booking and location tracking across India.",
    keywords: "home service software, on-demand service app, home service app India, salon booking app, electrician booking software, cleaning service app, real-time booking, location tracking",
    url: "https://www.sevenunique.com/services/home-service-software/",
    ogTitle: "Home Service Booking Software in India | App Development for On-Demand Services",
    ogDescription: "Launch your own home service app with Sevenunique Tech. We build custom software for on-demand services like plumbing, salon, electricians, and cleaning with real-time booking and location tracking across India.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/fantasy-sport-software/": {
    title: "Fantasy Sports Software Development in India | Custom App for Cricket, Football & More",
    description: "Sevenunique Tech offers custom fantasy sports software development in India. Build your own fantasy app for cricket, football, kabaddi & more with real-time scoring, leaderboards, and secure payment integration.",
    keywords: "fantasy sports software, fantasy app development India, cricket fantasy app, football fantasy software, kabaddi fantasy platform, real-time scoring, secure payment integration, leaderboards",
    url: "https://www.sevenunique.com/services/fantasy-sport-software/",
    ogTitle: "Fantasy Sports Software Development in India | Custom App for Cricket, Football & More",
    ogDescription: "Sevenunique Tech offers custom fantasy sports software development in India. Build your own fantasy app for cricket, football, kabaddi & more with real-time scoring, leaderboards, and secure payment integration.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/sport-betting-software/": {
    title: "Sports Betting Software Development in India | Custom Betting Platform Solutions",
    description: "Sevenunique Tech provides secure and scalable sports betting software in India. Build your own betting platform with real-time odds, multiple sports integration, live score updates, and wallet system.",
    keywords: "sports betting software, betting app development India, real-time odds, live score updates, betting wallet system, custom betting platform, multiple sports integration",
    url: "https://www.sevenunique.com/services/sport-betting-software/",
    ogTitle: "Sports Betting Software Development in India | Custom Betting Platform Solutions",
    ogDescription: "Sevenunique Tech provides secure and scalable sports betting software in India. Build your own betting platform with real-time odds, multiple sports integration, live score updates, and wallet system.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/school-management-software/": {
    title: "School Management Software in India | ERP Solution for Schools & Institutes",
    description: "Sevenunique Tech offers advanced school management software in India. Our ERP system includes student records, attendance, fees, timetable, exam management, and parent-teacher communication.",
    keywords: "school management software India, school ERP system, student attendance software, exam management, fee management system, parent-teacher communication, school administration software",
    url: "https://www.sevenunique.com/services/school-management-software/",
    ogTitle: "School Management Software in India | ERP Solution for Schools & Institutes",
    ogDescription: "Sevenunique Tech offers advanced school management software in India. Our ERP system includes student records, attendance, fees, timetable, exam management, and parent-teacher communication.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/crm-software/": {
    title: "Custom CRM Software Development in India | Sales & Customer Management Solution",
    "description": "Sevenunique Tech develops custom CRM software in India to streamline your sales, leads, and customer interactions. Get powerful tools for contact management, reporting, automation & team collaboration.",
    keywords: "CRM software India, custom CRM development, sales management software, lead tracking system, customer relationship management, contact management, CRM automation, CRM for businesses",
    url: "https://www.sevenunique.com/services/crm-software/",
    ogTitle: "Custom CRM Software Development in India | Sales & Customer Management Solution",
    ogDescription: "Sevenunique Tech develops custom CRM software in India to streamline your sales, leads, and customer interactions. Get powerful tools for contact management, reporting, automation & team collaboration.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/hrms-software/": {
    title: "HRMS Software Development in India | Employee & Payroll Management System",
    description: "Sevenunique Tech builds powerful HRMS software in India for efficient employee management, payroll processing, attendance tracking, performance reviews, and leave automation—all in one platform.",
    keywords: "HRMS software India, HRMS development, payroll management software, employee management system, attendance tracking software, leave automation, HRMS solutions, HRMS for businesses",
    url: "https://www.sevenunique.com/services/hrms-software/",
    ogTitle: "HRMS Software Development in India | Employee & Payroll Management System",
    ogDescription: "Sevenunique Tech builds powerful HRMS software in India for efficient employee management, payroll processing, attendance tracking, performance reviews, and leave automation—all in one platform.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/employee-tracking-software/": {
    title: "Employee Tracking Software in India | Real-Time Location & Productivity Monitoring",
    description: "Sevenunique Tech offers employee tracking software in India with real-time GPS tracking, task monitoring, attendance, and productivity reports. Ideal for field teams, remote staff, and sales workforce.",
    keywords: "employee tracking software, GPS tracking, real-time location tracking, productivity monitoring, task monitoring, field team software, remote staff management, sales workforce tracking, attendance software",
    url: "https://www.sevenunique.com/services/employee-tracking-software/",
    ogTitle: "Employee Tracking Software in India | Real-Time Location & Productivity Monitoring",
    ogDescription: "Sevenunique Tech offers employee tracking software in India with real-time GPS tracking, task monitoring, attendance, and productivity reports. Ideal for field teams, remote staff, and sales workforce.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/loan-module-software/": {
    title: "Loan Management Software in India | Custom Loan & Credit Management Solutions",
    description: "Sevenunique Tech offers custom loan management software in India. Streamline loan origination, approval, disbursal, and repayment tracking with our secure and automated platform.",
    keywords: "loan management software, loan origination software, credit management, loan approval, repayment tracking, loan disbursal, secure loan software, custom loan software",
    url: "https://www.sevenunique.com/services/loan-module-software/",
    ogTitle: "Loan Management Software in India | Custom Loan & Credit Management Solutions",
    ogDescription: "Sevenunique Tech offers custom loan management software in India. Streamline loan origination, approval, disbursal, and repayment tracking with our secure and automated platform.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/reseller-software/": {
    title: "Reseller Management Software in India | Custom Platform for Reseller Business",
    description: "Sevenunique Tech provides custom reseller management software in India. Automate inventory management, order processing, and reseller commissions with our secure and scalable platform for resellers in various industries.",
    keywords: "reseller management software, reseller platform, inventory management software, order processing, reseller commissions, custom reseller software, scalable reseller solutions",
    url: "https://www.sevenunique.com/services/reseller-software/",
    ogTitle: "Reseller Management Software in India | Custom Platform for Reseller Business",
    ogDescription: "Sevenunique Tech provides custom reseller management software in India. Automate inventory management, order processing, and reseller commissions with our secure and scalable platform for resellers in various industries.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/travel-booking-software/": {
    title: "Travel Booking Software in India | Custom Travel Portal Development",
    description: "Sevenunique Tech offers custom travel booking software in India. Build your own online travel portal with booking management, payment gateway integration, and real-time availability for flights, hotels, and tours.",
    keywords: "travel booking software, travel portal development, online travel booking, flight booking software, hotel booking system, tour booking software, payment gateway integration",
    url: "https://www.sevenunique.com/services/travel-booking-software/",
    ogTitle: "Travel Booking Software in India | Custom Travel Portal Development",
    ogDescription: "Sevenunique Tech offers custom travel booking software in India. Build your own online travel portal with booking management, payment gateway integration, and real-time availability for flights, hotels, and tours.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/fintech-software/": {
    title: "Fintech Software Development in India | Custom Financial Solutions for Businesses",
    description: "Sevenunique Tech provides custom fintech software development in India. Build secure and scalable financial solutions for payments, lending, digital wallets, and more with advanced features for businesses and startups.",
    keywords: "fintech software development, custom financial solutions, payment software, lending software, digital wallet development, fintech solutions for businesses, financial app development",
    url: "https://www.sevenunique.com/services/fintech-software/",
    ogTitle: "Fintech Software Development in India | Custom Financial Solutions for Businesses",
    ogDescription: "Sevenunique Tech provides custom fintech software development in India. Build secure and scalable financial solutions for payments, lending, digital wallets, and more with advanced features for businesses and startups.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-aeps/": {
    title: "AEPs API Integration in India | Scalable Application Enabling Platform API",
    description: "Sevenunique Tech offers AEPs API integration in India to enable seamless platform connectivity. Build scalable applications with secure APIs, real-time data processing, and robust integrations for your business needs.",
    keywords: "AEPs API integration, scalable API platform, real-time data processing, secure API services, API integrations in India, business API solutions, application enabling platform API",
    url: "https://www.sevenunique.com/services/api-aeps/",
    ogTitle: "AEPs API Integration in India | Scalable Application Enabling Platform API",
    ogDescription: "Sevenunique Tech offers AEPs API integration in India to enable seamless platform connectivity. Build scalable applications with secure APIs, real-time data processing, and robust integrations for your business needs.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-dmt/": {
    title: "DMT Software Solutions in India | Secure Domestic Money Transfer API",
    description: "Sevenunique Tech provides secure DMT software solutions in India. Integrate our domestic money transfer API to offer fast, reliable, and secure money transfer services to your customers with real-time tracking and compliance.",
    keywords: "DMT software solutions, domestic money transfer API, secure money transfer services, real-time tracking, DMT API integration, money transfer API in India, secure DMT solutions",
    url: "https://www.sevenunique.com/services/api-dmt/",
    ogTitle: "DMT Software Solutions in India | Secure Domestic Money Transfer API",
    ogDescription: "Sevenunique Tech provides secure DMT software solutions in India. Integrate our domestic money transfer API to offer fast, reliable, and secure money transfer services to your customers with real-time tracking and compliance.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-pancard-verification/": {
    title: "Pancard Verification Software in India | Secure KYC and Identity Verification Solution",
    description: "Sevenunique Tech offers Pancard verification software in India for secure KYC and identity verification. Automate your PAN card validation process with real-time data checks, compliance management, and seamless integration for your business.",
    keywords: "Pancard verification software, KYC verification, identity verification, PAN card validation, secure KYC, compliance management, PAN card verification API, KYC solution in India",
    url: "https://www.sevenunique.com/services/api-pancard-verification/",
    ogTitle: "Pancard Verification Software in India | Secure KYC and Identity Verification Solution",
    ogDescription: "Sevenunique Tech offers Pancard verification software in India for secure KYC and identity verification. Automate your PAN card validation process with real-time data checks, compliance management, and seamless integration for your business.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-aadhar-verification/": {
    title: "Aadhar Card Verification Software in India | Secure KYC & Identity Validation",
    description: "Sevenunique Tech offers secure Aadhar card verification software in India. Automate Aadhar-based KYC, identity validation, and real-time data checks to ensure compliance with government standards and streamline your verification process.",
    keywords: "Aadhar card verification software, Aadhar verification API, KYC verification, identity validation, secure KYC, Aadhar validation, compliance with government standards, Aadhar card validation",
    url: "https://www.sevenunique.com/services/api-aadhar-verification/",
    ogTitle: "Aadhar Card Verification Software in India | Secure KYC & Identity Validation",
    ogDescription: "Sevenunique Tech offers secure Aadhar card verification software in India. Automate Aadhar-based KYC, identity validation, and real-time data checks to ensure compliance with government standards and streamline your verification process.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-bus-booking/": {
    title: "Bus Booking Software in India | Custom Bus Reservation System for Travel Businesses",
    description: "Sevenunique Tech offers custom bus booking software in India. Build a seamless online bus reservation platform with real-time seat availability, booking management, payment gateway integration, and automated ticketing system.",
    keywords: "bus booking software, bus reservation system, online bus booking, travel business software, bus ticketing system, real-time seat availability, booking management, payment gateway integration",
    url: "https://www.sevenunique.com/services/api-bus-booking/",
    ogTitle: "Bus Booking Software in India | Custom Bus Reservation System for Travel Businesses",
    ogDescription: "Sevenunique Tech offers custom bus booking software in India. Build a seamless online bus reservation platform with real-time seat availability, booking management, payment gateway integration, and automated ticketing system.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-hotel-booking/": {
    title: "Hotel Booking Software in India | Custom Hotel Reservation System for Businesses",
    description: "Sevenunique Tech offers custom hotel booking software in India. Build a seamless online hotel reservation platform with real-time room availability, booking management, payment integration, and automated guest check-in system.",
    keywords: "hotel booking software, hotel reservation system, online hotel booking, hotel reservation platform, real-time room availability, booking management, payment integration, guest check-in system",
    url: "https://www.sevenunique.com/services/api-hotel-booking/",
    ogTitle: "Hotel Booking Software in India | Custom Hotel Reservation System for Businesses",
    ogDescription: "Sevenunique Tech offers custom hotel booking software in India. Build a seamless online hotel reservation platform with real-time room availability, booking management, payment integration, and automated guest check-in system.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-flight-booking/": {
    title: "Flight Booking API in India | Custom Flight Reservation API for Travel Businesses",
    description: "Sevenunique Tech offers custom flight booking API in India for travel agencies and online platforms. Integrate our secure and scalable API for real-time flight booking, availability checks, payment gateway integration, and seamless user experience.",
    keywords: "flight booking API, custom flight reservation API, flight booking software, real-time flight booking, availability checks, payment gateway integration, travel business API",
    url: "https://www.sevenunique.com/services/api-flight-booking/",
    ogTitle: "Flight Booking API in India | Custom Flight Reservation API for Travel Businesses",
    ogDescription: "Sevenunique Tech offers custom flight booking API in India for travel agencies and online platforms. Integrate our secure and scalable API for real-time flight booking, availability checks, payment gateway integration, and seamless user experience.",
    ogImage: "https://sevenunique.com/image/logo.png"
  },
  "/services/api-cibil-score/": {
    title: "CIBIL Score API in India | Credit Score Verification & Loan Eligibility API",
    description: "Sevenunique Tech offers CIBIL Score API integration in India for credit score verification and loan eligibility checks. Integrate our secure and scalable API to access real-time credit data and enhance your loan approval process.",
    keywords: "CIBIL score API, credit score verification, loan eligibility API, credit data API, loan approval process, real-time credit score",
    url: "https://www.sevenunique.com/services/api-cibil-score/",
    ogTitle: "CIBIL Score API in India | Credit Score Verification & Loan Eligibility API",
    ogDescription: "Sevenunique Tech offers CIBIL Score API integration in India for credit score verification and loan eligibility checks. Integrate our secure and scalable API to access real-time credit data and enhance your loan approval process.",
    ogImage: "https://sevenunique.com/image/logo.png"
  }
}
export default seoConfig;
