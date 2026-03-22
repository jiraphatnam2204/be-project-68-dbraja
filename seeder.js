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
];

// tel must match /^0[689]{1}\d{8}$/  (06x, 08x, 09x followed by 8 digits)
const usersData = [
  {
    name: "Admin User",
    tel: "0611111111",
    email: "admin@dbraja.com",
    role: "admin",
    password: "password123",
  },
  {
    name: "James User",
    tel: "0812345678",
    email: "james@example.com",
    role: "user",
    password: "password123",
  },
  {
    name: "Pluem User",
    tel: "0987654321",
    email: "pluem@example.com",
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
        user: insertedUsers[1]._id, // Links to James
        company: insertedCompanies[0]._id, // Links to Sigma Logistics
        apptDate: new Date("2022-05-10T09:00:00Z"), // Valid: May 10, 2022
      },
      {
        user: insertedUsers[2]._id, // Links to Pluem
        company: insertedCompanies[1]._id, // Links to Apex Tech Solutions
        apptDate: new Date("2022-05-12T14:30:00Z"), // Valid: May 12, 2022
      },
      {
        user: insertedUsers[1]._id, // James again
        company: insertedCompanies[15]._id, // Links to Urban Build
        apptDate: new Date("2022-05-13T10:00:00Z"), // Valid: May 13, 2022
      },
    ];

    const insertedRegistrations =
      await Registration.insertMany(registrationsData);
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
