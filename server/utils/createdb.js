const db = require('../models/db');
exports.seed = async () => {
  await db.User.create({
    name: 'Rohan Shah',
    email: 'rohanshah@gmail.com',
    college: 'BITS PILANI GOA CAMPUS',
    degree: 'B.E.',
    contact: '9999999999',
    city: 'Mumbai',
    state: 'Maharashtra',
    image_url: 'image.com/image',
    linkedin_url: 'linkedin.com/xyz',
  });
  await db.User.create({
    name: 'Raghav Yadav',
    email: 'raghavyad01@gmail.com',
    college: 'BITS PILANI GOA CAMPUS',
    degree: 'M.Sc + B.E.',
    contact: '9999999988',
    city: 'Baroda',
    state: 'Surat',
    image_url: 'image.com/image2',
    linkedin_url: 'linkedin.com/xyzabc',
  });
};
