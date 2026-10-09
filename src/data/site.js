// Edit personal details, links and content here.
export const site = {
  name: 'Shubham Jangir',
  role: 'Computer Science Engineering Student | Web Developer | Aspiring Software Developer',
  university: 'Lovely Professional University',
  email: 'shubhamjangir40289@gmail.com',
  github: 'https://github.com/Shubham40289',
  linkedin: 'https://www.linkedin.com/in/shubhamjangir11',
  resume: '/resume.pdf', // put your PDF at public/resume.pdf
  photo: '/profile.jpg',
}

export const nav = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Training', 'training'], ['Education', 'education'], ['Contact', 'contact'],
]

export const skills = [
  { title: 'Programming Languages', icon: 'Code2', items: ['C++', 'JavaScript', 'C', 'PHP', 'Python'], note: 'Python used in my machine-learning project' },
  { title: 'Frontend Development', icon: 'Layout', items: ['HTML5', 'CSS3', 'Bootstrap', 'React'] },
  { title: 'Backend Development', icon: 'Server', items: ['Node.js', 'Express.js'] },
  { title: 'Databases', icon: 'Database', items: ['MySQL', 'MongoDB', 'Mongoose'] },
  { title: 'Machine Learning', icon: 'Brain', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Linear Regression', 'Decision Tree Regressor', 'Model evaluation: R², MAE, RMSE'] },
  { title: 'Soft Skills', icon: 'Users', items: ['Problem-solving', 'Teamwork', 'Quick learning', 'Adaptability'] },
]

export const training = {
  title: 'AI & ML Basics to Advanced', org: 'TheEduBootCamp', date: 'June 2026',
  points: [
    'Learned fundamental artificial intelligence and machine-learning concepts.',
    'Studied supervised and unsupervised learning.',
    'Worked on data preprocessing, feature selection, and model training using Python libraries.',
    'Developed the Used Car Price Predictor project.',
  ],
}

export const certificates = [
  { title: 'AI & ML Basics to Advanced', issuer: 'Eduniketan', date: 'July 2026' },
  { title: 'Computer Programming', issuer: 'iamNeo', date: 'August 2025' },
  { title: 'Programming Using C++', issuer: 'Infosys Springboard', date: 'May 2025' },
]

export const achievements = [
  { title: 'Community Development Project', date: 'May 2025', points: ['Organized a cybercrime-awareness workshop at a school, educating 40+ students about cybercrime and online safety.', 'Secured an A+ grade in the project.'] },
  { title: 'CODEMASTERY Hackathon', date: 'January 2024', points: ['Collaborated with the organizing team to coordinate participants and manage hackathon activities.'] },
]

export const education = [
  { school: 'Lovely Professional University', degree: 'B.Tech, Computer Science and Engineering', score: 'CGPA: 7.00', date: 'August 2024 – Present', place: 'Phagwara, Punjab, India' },
  { school: 'Matrix High School', degree: 'Matriculation', score: '77%', date: 'April 2022 – March 2023', place: 'Sikar, Rajasthan' },
  { school: 'Asha Devi International School', degree: 'Intermediate', score: '93%', date: 'April 2020 – March 2021', place: 'Sadulpur, Rajasthan' },
]
