const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const Company = require("./models/Company");
const User = require("./models/User");
const Registration = require("./models/Registration");

const companies = [
  {
    name: "Sigma Logistics",
    address: "123 Freight Dr, Louisville, KY",
    website: "https://sigma.com",
    description: "Supply chain management and trucking.",
    tel: "0815151515",
  },
  {
    name: "Apex Tech Solutions",
    address: "456 Innovation Way, San Jose, CA",
    website: "https://apextech.com",
    description: "Enterprise software development and cloud infrastructure.",
    tel: "0825551234",
  },
  {
    name: "Meridian Health",
    address: "789 Wellness Blvd, Boston, MA",
    website: "https://meridianhealth.com",
    description: "Medical equipment manufacturing and distribution.",
    tel: "0831112222",
  },
  {
    name: "Nova Dynamics",
    address: "101 Aerospace Pkwy, Houston, TX",
    website: "https://novadynamics.com",
    description: "Aerospace engineering and satellite components.",
    tel: "0842223333",
  },
  {
    name: "GreenLeaf Organics",
    address: "202 Farm Rd, Portland, OR",
    website: "https://greenleaforganics.com",
    description: "Organic food processing and wholesale.",
    tel: "0853334444",
  },
  {
    name: "Pinnacle Finance",
    address: "303 Wall St, New York, NY",
    website: "https://pinnaclefinance.com",
    description: "Investment banking and asset management.",
    tel: "0864445555",
  },
  {
    name: "Quantum Computing Co",
    address: "404 Qubit Ln, Seattle, WA",
    website: "https://quantumco.com",
    description: "Next-generation computing hardware research.",
    tel: "0875556666",
  },
  {
    name: "BlueWave Marine",
    address: "505 Ocean Ave, Miami, FL",
    website: "https://bluewave.com",
    description: "Commercial shipping and maritime logistics.",
    tel: "0886667777",
  },
  {
    name: "Summit Real Estate",
    address: "606 Skyline Dr, Denver, CO",
    website: "https://summitre.com",
    description: "Commercial property management and development.",
    tel: "0897778888",
  },
  {
    name: "Echo Communications",
    address: "707 Signal Way, Atlanta, GA",
    website: "https://echocomm.com",
    description: "Telecommunications and networking equipment.",
    tel: "0818889999",
  },
  {
    name: "IronClad Security",
    address: "808 Shield Ct, Washington, DC",
    website: "https://ironclad.com",
    description: "Cybersecurity consulting and threat intelligence.",
    tel: "0829990000",
  },
  {
    name: "Solaris Energy",
    address: "909 Sunbeam St, Phoenix, AZ",
    website: "https://solarisenergy.com",
    description: "Solar panel manufacturing and installation.",
    tel: "0830001111",
  },
  {
    name: "Velocity Motors",
    address: "111 Engine Blvd, Detroit, MI",
    website: "https://velocitymotors.com",
    description: "Automotive parts manufacturing.",
    tel: "0841112222",
  },
  {
    name: "Luminous Media",
    address: "222 Creative Ave, Los Angeles, CA",
    website: "https://luminousmedia.com",
    description: "Digital marketing and video production.",
    tel: "0852223333",
  },
  {
    name: "Horizon BioTech",
    address: "333 DNA Dr, Cambridge, MA",
    website: "https://horizonbio.com",
    description: "Pharmaceutical research and development.",
    tel: "0863334444",
  },
  {
    name: "Urban Build",
    address: "444 Constructor Rd, Chicago, IL",
    website: "https://urbanbuild.com",
    description: "Large-scale construction and civil engineering.",
    tel: "0874445555",
  },
  {
    name: "AeroStream",
    address: "555 Jet Pkwy, Dallas, TX",
    website: "https://aerostream.com",
    description: "Aviation services and charter flights.",
    tel: "0885556666",
  },
  {
    name: "TerraFirma Ag",
    address: "666 Harvest Ln, Omaha, NE",
    website: "https://terrafirma.com",
    description: "Agricultural technology and smart farming solutions.",
    tel: "0896667777",
  },
  {
    name: "CodeCraft",
    address: "777 Dev Ave, Austin, TX",
    website: "https://codecraft.com",
    description: "Web development bootcamps and IT training.",
    tel: "0817778888",
  },
  {
    name: "Crystal Clear Water",
    address: "888 Aqua St, Tampa, FL",
    website: "https://crystalclear.com",
    description: "Water purification systems and bottling.",
    tel: "0828889999",
  },
  {
    name: "Onyx Retail",
    address: "999 Shopper Blvd, Minneapolis, MN",
    website: "https://onyxretail.com",
    description: "E-commerce platform and retail analytics.",
    tel: "0839990000",
  },
  {
    name: "Vanguard Materials",
    address: "121 Alloy Way, Pittsburgh, PA",
    website: "https://vanguardmat.com",
    description: "Advanced composites and metallurgy.",
    tel: "0840001111",
  },
  {
    name: "Neon Graphics",
    address: "232 Pixel Ln, San Francisco, CA",
    website: "https://neongraphics.com",
    description: "3D rendering software and game engines.",
    tel: "0851112222",
  },
  {
    name: "Starlight Apparel",
    address: "343 Fashion Ave, New York, NY",
    website: "https://starlight.com",
    description: "Clothing design and textile manufacturing.",
    tel: "0862223333",
  },
  {
    name: "Titan Heavy Industries",
    address: "454 Steel Rd, Cleveland, OH",
    website: "https://titanheavy.com",
    description: "Industrial machinery and heavy equipment.",
    tel: "0873334444",
  },
  {
    name: "Omega Robotics",
    address: "565 Cyber Dr, San Diego, CA",
    website: "https://omegarobotics.com",
    description: "Automated assembly line robots.",
    tel: "0884445555",
  },
  {
    name: "Zenith Architecture",
    address: "676 Blueprint Blvd, Portland, OR",
    website: "https://zenitharch.com",
    description: "Sustainable building design and consulting.",
    tel: "0895556666",
  },
  {
    name: "Pulse Fitness",
    address: "787 Cardio Ct, Denver, CO",
    website: "https://pulsefitness.com",
    description: "Smart home gym equipment.",
    tel: "0816667777",
  },
  {
    name: "Cascade Beverages",
    address: "898 Spring Rd, Seattle, WA",
    website: "https://cascadebev.com",
    description: "Craft soda and sparkling water distributor.",
    tel: "0827778888",
  },
  {
    name: "Aurora AI",
    address: "909 Neural Net Way, Toronto, ON",
    website: "https://auroraai.com",
    description: "Machine learning models for predictive analytics.",
    tel: "0838889999",
  },
  {
    name: "Cobalt Mining",
    address: "131 Mineral St, Salt Lake City, UT",
    website: "https://cobaltmining.com",
    description: "Rare earth mineral extraction and refining.",
    tel: "0849990000",
  },
  {
    name: "Silverline Transit",
    address: "242 Metro Blvd, Charlotte, NC",
    website: "https://silverline.com",
    description: "Public transportation logistics and software.",
    tel: "0850001111",
  },
  {
    name: "Ignite Marketing",
    address: "353 Ad Ave, Austin, TX",
    website: "https://ignitemarketing.com",
    description: "SEO and digital ad campaign management.",
    tel: "0861112222",
  },
  {
    name: "Fortress Storage",
    address: "464 Archive Dr, Reno, NV",
    website: "https://fortress.com",
    description: "Secure data centers and cloud storage.",
    tel: "0872223333",
  },
  {
    name: "Prism Print",
    address: "575 CMYK Rd, Milwaukee, WI",
    website: "https://prismprint.com",
    description: "Commercial printing and packaging solutions.",
    tel: "0883334444",
  },
  {
    name: "Aether Networks",
    address: "686 Router Ln, Raleigh, NC",
    website: "https://aethernet.com",
    description: "ISP and fiber optic installations.",
    tel: "0894445555",
  },
  {
    name: "Haven Homes",
    address: "797 Suburbia St, Orlando, FL",
    website: "https://havenhomes.com",
    description: "Residential home construction.",
    tel: "0815556666",
  },
  {
    name: "Vertex Gaming",
    address: "808 Controller Ct, Montreal, QC",
    website: "https://vertexgaming.com",
    description: "Video game development and publishing.",
    tel: "0826667777",
  },
  {
    name: "GigaByte Electronics",
    address: "919 Circuit Way, Taipei, TW",
    website: "https://gigabyteel.com",
    description: "Motherboards and consumer electronics.",
    tel: "0837778888",
  },
  {
    name: "Maplewood Furniture",
    address: "141 Timber Rd, Vancouver, BC",
    website: "https://maplewood.com",
    description: "Custom woodworking and office furniture.",
    tel: "0848889999",
  },
  {
    name: "Nimbus Weather",
    address: "252 Cloud Pkwy, Boulder, CO",
    website: "https://nimbusweather.com",
    description: "Meteorological data APIs and software.",
    tel: "0859990000",
  },
  {
    name: "Pioneer Petrol",
    address: "363 Derrick Dr, Tulsa, OK",
    website: "https://pioneerpetrol.com",
    description: "Oil refining and pipeline monitoring.",
    tel: "0860001111",
  },
  {
    name: "Acme Supplies",
    address: "474 Generic Ave, St. Louis, MO",
    website: "https://acmesupplies.com",
    description: "Wholesale office supplies and stationery.",
    tel: "0871112222",
  },
  {
    name: "Borealis Travel",
    address: "585 Passport Blvd, Miami, FL",
    website: "https://borealistravel.com",
    description: "Corporate travel booking and management.",
    tel: "0882223333",
  },
  {
    name: "Crimson Education",
    address: "696 Campus Way, Boston, MA",
    website: "https://crimsonedu.com",
    description: "E-learning platforms and virtual classrooms.",
    tel: "0893334444",
  },
  {
    name: "Delta Hydraulics",
    address: "707 Valve St, Indianapolis, IN",
    website: "https://deltahydraulics.com",
    description: "Fluid power systems for industrial use.",
    tel: "0814445555",
  },
  {
    name: "Equinox Solar",
    address: "818 Photon Dr, Las Vegas, NV",
    website: "https://equinoxsolar.com",
    description: "Utility-scale solar farm development.",
    tel: "0825556666",
  },
  {
    name: "Frontier Space",
    address: "929 Orbit Ln, Cape Canaveral, FL",
    website: "https://frontierspace.com",
    description: "Commercial spaceflight payload integration.",
    tel: "0836667777",
  },
  {
    name: "Genesis Bio",
    address: "151 Cell St, San Francisco, CA",
    website: "https://genesisbio.com",
    description: "Synthetic biology and genetic sequencing.",
    tel: "0847778888",
  },
  {
    name: "Helios Transport",
    address: "262 Transit Pkwy, Chicago, IL",
    website: "https://heliostransport.com",
    description: "Electric bus manufacturing and sales.",
    tel: "0858889999",
  },
];

// tel must match /^0[689]{1}\d{8}$/  (06x, 08x, 09x followed by 8 digits)
const usersData = [
  {
    name: "Admin User",
    tel: "0611111111",
    email: "admin@dbraja.com",
    role: "admin",
    password: "password123", // Note: Your console log says password123, you might want to make them match!
  },
  {
    name: "Somchai User",
    tel: "0812345678", // Valid: Starts with 08
    email: "somchai@example.com",
    role: "user",
    password: "password123",
  },
  {
    name: "Suda User",
    tel: "0987654321", // Valid: Starts with 09
    email: "suda@example.com",
    role: "user",
    password: "password123",
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Clear all collections
    await Registration.deleteMany();
    await User.deleteMany();
    await Company.deleteMany();
    console.log("All collections cleared");

    // Insert companies
    const insertedCompanies = await Company.insertMany(companies);
    console.log(`${insertedCompanies.length} companies inserted`);

    // Insert users via create() to trigger the bcrypt pre-save hook
    const insertedUsers = await User.create(usersData);
    console.log(`${insertedUsers.length} users inserted`);

    // Build registrations using real IDs
    // Dates must be between 2022-05-10 and 2022-05-13
    const registrationsData = [
      {
        user: insertedUsers[1]._id, // Links to Somchai
        company: insertedCompanies[0]._id, // Links to Sigma Logistics
        apptDate: new Date("2022-05-10T09:00:00Z"), // Valid: May 10, 2022
      },
      {
        user: insertedUsers[2]._id, // Links to Suda
        company: insertedCompanies[1]._id, // Links to Apex Tech Solutions
        apptDate: new Date("2022-05-12T14:30:00Z"), // Valid: May 12, 2022
      },
      {
        user: insertedUsers[1]._id, // Somchai again
        company: insertedCompanies[15]._id, // Links to Urban Build
        apptDate: new Date("2022-05-13T10:00:00Z"), // Valid: May 13, 2022
      },
    ];

    const insertedRegistrations = await Registration.insertMany(registrationsData);
    console.log(`${insertedRegistrations.length} registrations inserted`);

    console.log("\nSeed complete!");
    console.log(
      "Admin credentials -> email: admin@dbraja.com | password: password123",
    );
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Registration.deleteMany();
    await User.deleteMany();
    await Company.deleteMany();
    console.log("All data deleted");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}