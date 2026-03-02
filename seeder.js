const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const Company = require('./models/Company');
const User = require('./models/User');
const Registration = require('./models/Registration');

const companies = [
    {
        name: 'Tech Innovations Co.',
        address: '123 Silicon Valley Rd, San Francisco, CA 94105',
        website: 'https://techinnovations.com',
        description: 'A leading technology company specializing in AI and machine learning solutions for enterprise clients.',
        tel: '0812345678'
    },
    {
        name: 'Green Energy Solutions',
        address: '456 Eco Park Ave, Austin, TX 78701',
        website: 'https://greenenergysolutions.com',
        description: 'Providing sustainable energy solutions including solar panels and wind turbines for residential and commercial use.',
        tel: '0823456789'
    },
    {
        name: 'HealthBridge Medical',
        address: '789 Medical Center Dr, Boston, MA 02115',
        website: 'https://healthbridgemedical.com',
        description: 'A healthcare technology firm developing innovative digital health platforms and telemedicine services.',
        tel: '0834567890'
    },
    {
        name: 'FinTech Capital Group',
        address: '101 Wall Street, New York, NY 10005',
        website: 'https://fintechcapital.com',
        description: 'Financial technology company offering cutting-edge payment processing, digital banking, and investment platforms.',
        tel: '0845678901'
    },
    {
        name: 'LogiFlow Logistics',
        address: '202 Warehouse Blvd, Chicago, IL 60601',
        website: 'https://logiflow.com',
        description: 'End-to-end supply chain and logistics management company serving clients across Southeast Asia and beyond.',
        tel: '0856789012'
    },
    {
        name: 'EduTech Academy',
        address: '303 Learning Lane, Seattle, WA 98101',
        website: 'https://edutechacademy.com',
        description: 'Online education platform offering professional development courses, coding bootcamps, and university partnerships.',
        tel: '0867890123'
    },
    {
        name: 'CloudSphere Systems',
        address: '404 Cloud Computing Way, Denver, CO 80201',
        website: 'https://cloudspheresystems.com',
        description: 'Enterprise cloud infrastructure provider delivering scalable hosting, DevOps, and cybersecurity services.',
        tel: '0878901234'
    },
    {
        name: 'Retail Nexus Group',
        address: '505 Shopping Center Rd, Miami, FL 33101',
        website: 'https://retailnexus.com',
        description: 'E-commerce and retail technology company building omnichannel solutions for modern retail businesses.',
        tel: '0889012345'
    },
    {
        name: 'AutoDrive Technologies',
        address: '606 Motor City Ave, Detroit, MI 48201',
        website: 'https://autodrivetechnologies.com',
        description: 'Autonomous vehicle software company developing advanced driver assistance systems and self-driving car platforms.',
        tel: '0890123456'
    },
    {
        name: 'BioGen Research Labs',
        address: '707 Science Park Dr, San Diego, CA 92121',
        website: 'https://biogenresearchlabs.com',
        description: 'Biotechnology research company focused on genomics, drug discovery, and personalized medicine solutions.',
        tel: '0801234567'
    },
    { name: 'SkyHigh Aerospace', address: '111 Pilot Way, Seattle, WA', website: 'https://skyhigh.com', description: 'Advanced aerospace engineering.', tel: '0811223344' },
    { name: 'Oceanic Research', address: '222 Marine Dr, Miami, FL', website: 'https://oceanic.com', description: 'Marine biology and ocean conservation.', tel: '0822334455' },
    { name: 'CyberGuard Security', address: '333 Firewall St, San Jose, CA', website: 'https://cyberguard.com', description: 'Next-gen cybersecurity solutions.', tel: '0833445566' },
    { name: 'Urban Design Studio', address: '444 City Plaza, New York, NY', website: 'https://urbandesign.com', description: 'Sustainable urban planning.', tel: '0844556677' },
    { name: 'Quantum Computing Inc', address: '555 Qubit Blvd, Cambridge, MA', website: 'https://quantum.com', description: 'Quantum hardware and software development.', tel: '0855667788' },
    { name: 'AgriTech Solutions', address: '666 Harvest Rd, Des Moines, IA', website: 'https://agritech.com', description: 'Smart farming and agricultural technology.', tel: '0866778899' },
    { name: 'Solaris Energy', address: '777 Sunshine Ave, Phoenix, AZ', website: 'https://solaris.com', description: 'Renewable solar energy systems.', tel: '0877889900' },
    { name: 'NanoMed Systems', address: '888 Micro Way, Houston, TX', website: 'https://nanomed.com', description: 'Nanotechnology for medical applications.', tel: '0888990011' },
    { name: 'Global Logistics Hub', address: '999 Port Rd, Long Beach, CA', website: 'https://globallogistics.com', description: 'International shipping and warehousing.', tel: '0899001122' },
    { name: 'Infinite Media', address: '123 Creator Lane, Los Angeles, CA', website: 'https://infinitemedia.com', description: 'Digital content creation and marketing.', tel: '0812121212' },
    { name: 'BioFuel Dynamics', address: '234 Bio Dr, Portland, OR', website: 'https://biofuel.com', description: 'Developing eco-friendly biofuels.', tel: '0823232323' },
    { name: 'Swift Payments', address: '345 Transaction Ave, Charlotte, NC', website: 'https://swiftpayments.com', description: 'Fast and secure payment processing.', tel: '0834343434' },
    { name: 'DeepBlue AI', address: '456 Neural Way, Pittsburgh, PA', website: 'https://deepblue.com', description: 'Artificial intelligence for deep learning.', tel: '0845454545' },
    { name: 'Apex Robotics', address: '567 Automation St, Columbus, OH', website: 'https://apexrobotics.com', description: 'Industrial and consumer robotics.', tel: '0856565656' },
    { name: 'Peak Performance', address: '678 Fitness Rd, Boulder, CO', website: 'https://peakperformance.com', description: 'Sports science and athletic equipment.', tel: '0867676767' },
    { name: 'SilverLine Trains', address: '789 Transit Blvd, Chicago, IL', website: 'https://silverline.com', description: 'Modern rail transport solutions.', tel: '0878787878' },
    { name: 'GigaData Analytics', address: '890 Insight Dr, Atlanta, GA', website: 'https://gigadata.com', description: 'Big data analysis and visualization.', tel: '0889898989' },
    { name: 'Verdant Landscapes', address: '901 Garden St, Portland, OR', website: 'https://verdant.com', description: 'Eco-friendly landscaping services.', tel: '0890909090' },
    { name: 'SafeTravel Insurance', address: '012 Protection Ave, Hartford, CT', website: 'https://safetravel.com', description: 'Global travel insurance plans.', tel: '0801010101' },
    { name: 'Modern Living', address: '123 Style Rd, Dallas, TX', website: 'https://modernliving.com', description: 'Contemporary furniture and interior design.', tel: '0813131313' },
    { name: 'AquaPure Systems', address: '234 Clear Water Dr, Las Vegas, NV', website: 'https://aquapure.com', description: 'Water purification and filtration.', tel: '0824242424' },
    { name: 'Z-Tech Electronics', address: '345 Circuit St, Austin, TX', website: 'https://ztech.com', description: 'Consumer electronics manufacturing.', tel: '0835353535' },
    { name: 'Starlight Hotels', address: '456 Luxury Blvd, Orlando, FL', website: 'https://starlight.com', description: 'Premium hospitality and hotels.', tel: '0846464646' },
    { name: 'Rapid Delivery', address: '567 Courier Way, Memphis, TN', website: 'https://rapid.com', description: 'Same-day delivery services.', tel: '0857575757' },
    { name: 'EcoSmart Homes', address: '678 Green Dr, Salt Lake City, UT', website: 'https://ecosmart.com', description: 'Smart home automation for energy efficiency.', tel: '0868686868' },
    { name: 'BlueSky Airlines', address: '789 Terminal Rd, Atlanta, GA', website: 'https://bluesky.com', description: 'Regional and international air travel.', tel: '0879797979' },
    { name: 'Visionary Optics', address: '890 Lens Ave, Rochester, NY', website: 'https://visionary.com', description: 'Advanced eyewear and optical systems.', tel: '0880808080' },
    { name: 'TrueNorth Finance', address: '901 Capital St, Minneapolis, MN', website: 'https://truenorth.com', description: 'Wealth management and financial planning.', tel: '0891919191' },
    { name: 'IronClad Construction', address: '012 Steel Rd, Pittsburgh, PA', website: 'https://ironclad.com', description: 'Heavy construction and infrastructure.', tel: '0802020202' },
    { name: 'PetCare Plus', address: '123 Paws Ave, Nashville, TN', website: 'https://petcare.com', description: 'Full-service veterinary and pet care.', tel: '0814141414' },
    { name: 'NextStep Careers', address: '234 Future St, Richmond, VA', website: 'https://nextstep.com', description: 'Job placement and career coaching.', tel: '0825252525' },
    { name: 'BrightMind Education', address: '345 Wisdom Way, Madison, WI', website: 'https://brightmind.com', description: 'K-12 educational resources and tutoring.', tel: '0836363636' },
    { name: 'ClearView Real Estate', address: '456 Property Rd, Seattle, WA', website: 'https://clearview.com', description: 'Residential and commercial real estate.', tel: '0847474747' },
    { name: 'Delta Software', address: '567 Code Blvd, San Francisco, CA', website: 'https://delta.com', description: 'Custom software development services.', tel: '0858585858' },
    { name: 'Epsilon Pharma', address: '678 Lab Rd, Raleigh, NC', website: 'https://epsilon.com', description: 'Pharmaceutical research and development.', tel: '0869696969' },
    { name: 'Zeta Fashion', address: '789 Runway Ave, New York, NY', website: 'https://zeta.com', description: 'High-end fashion and apparel.', tel: '0870707070' },
    { name: 'Alpha Auto', address: '890 Engine St, Detroit, MI', website: 'https://alphaauto.com', description: 'Automobile parts and manufacturing.', tel: '0881818181' },
    { name: 'Gamma Gaming', address: '901 Joystick Rd, Irvine, CA', website: 'https://gamma.com', description: 'Video game development and publishing.', tel: '0892929292' },
    { name: 'Theta Wellness', address: '012 Zen Way, Sedona, AZ', website: 'https://theta.com', description: 'Holistic health and wellness retreats.', tel: '0803030303' },
    { name: 'Sigma Logistics', address: '123 Freight Dr, Louisville, KY', website: 'https://sigma.com', description: 'Supply chain management and trucking.', tel: '0815151515' }
];

// tel must match /^0[689]{1}\d{8}$/  (06x, 08x, 09x followed by 8 digits)
const usersData = [
    {
        name: 'Admin User',
        tel: '0611111111',
        email: 'admin@dbraja.com',
        role: 'admin',
        password: 'password123'
    },
    // {
    //     name: 'Alice Johnson',
    //     tel: '0622222222',
    //     email: 'alice.johnson@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Bob Smith',
    //     tel: '0633333333',
    //     email: 'bob.smith@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Carol White',
    //     tel: '0644444444',
    //     email: 'carol.white@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'David Brown',
    //     tel: '0655555555',
    //     email: 'david.brown@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Eva Martinez',
    //     tel: '0666666666',
    //     email: 'eva.martinez@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Frank Lee',
    //     tel: '0677777777',
    //     email: 'frank.lee@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Grace Kim',
    //     tel: '0688888888',
    //     email: 'grace.kim@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Henry Chen',
    //     tel: '0699999999',
    //     email: 'henry.chen@example.com',
    //     role: 'user',
    //     password: 'password123'
    // },
    // {
    //     name: 'Iris Nguyen',
    //     tel: '0610101010',
    //     email: 'iris.nguyen@example.com',
    //     role: 'user',
    //     password: 'password123'
    // }
];

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        // Clear all collections
        await Registration.deleteMany();
        await User.deleteMany();
        await Company.deleteMany();
        console.log('All collections cleared');

        // Insert companies
        const insertedCompanies = await Company.insertMany(companies);
        console.log(`${insertedCompanies.length} companies inserted`);

        // Insert users via create() to trigger the bcrypt pre-save hook
        const insertedUsers = await User.create(usersData);
        console.log(`${insertedUsers.length} users inserted`);

        // Build registrations using real IDs
        // Dates must be between 2022-05-10 and 2022-05-13
        const registrations = [
            // { apptDate: new Date('2022-05-10'), user: insertedUsers[1]._id, company: insertedCompanies[0]._id },
            // { apptDate: new Date('2022-05-10'), user: insertedUsers[2]._id, company: insertedCompanies[1]._id },
            // { apptDate: new Date('2022-05-11'), user: insertedUsers[3]._id, company: insertedCompanies[2]._id },
            // { apptDate: new Date('2022-05-11'), user: insertedUsers[4]._id, company: insertedCompanies[3]._id },
            // { apptDate: new Date('2022-05-11'), user: insertedUsers[5]._id, company: insertedCompanies[4]._id },
            // { apptDate: new Date('2022-05-12'), user: insertedUsers[6]._id, company: insertedCompanies[5]._id },
            // { apptDate: new Date('2022-05-12'), user: insertedUsers[7]._id, company: insertedCompanies[6]._id },
            // { apptDate: new Date('2022-05-12'), user: insertedUsers[8]._id, company: insertedCompanies[7]._id },
            // { apptDate: new Date('2022-05-13'), user: insertedUsers[9]._id, company: insertedCompanies[8]._id },
            // { apptDate: new Date('2022-05-13'), user: insertedUsers[1]._id, company: insertedCompanies[9]._id },
        ];

        const insertedRegistrations = await Registration.insertMany(registrations);
        console.log(`${insertedRegistrations.length} registrations inserted`);

        console.log('\nSeed complete!');
        console.log('Admin credentials -> email: admin@dbraja.com | password: password123');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        await Registration.deleteMany();
        await User.deleteMany();
        await Company.deleteMany();
        console.log('All data deleted');

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    deleteData();
} else {
    importData();
}
