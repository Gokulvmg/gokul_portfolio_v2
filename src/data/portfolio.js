export const personalInfo = {
  name: 'Gokul VM',
  roles: ['Data Analyst', 'Power BI Developer', 'SQL Developer', 'Python Developer', 'Business Development Executive'],
  email: 'vmgokul89@gmail.com',
  phone: '+91 8870519185',
  github: 'https://github.com/Gokulvmg',
  linkedin: 'https://www.linkedin.com/in/gokulvm',
  location: 'Coimbatore, Tamil Nadu',
  about: `Aspiring Data Analyst with hands-on internship experience at NoviTech R&D, NDV Techsys Solutions, and Infosys Springboard. Skilled in Power BI, Python, SQL, Excel, and Data Visualization — transforming raw data into actionable business insights. Passionate about dashboard development, business intelligence, and data-driven decision making. Active leader in GDG on Campus, INFINIT IT Association, and Rotaract Club.`,
  objective: `To secure a challenging position as a Data Analyst or Power BI Developer where I can leverage my skills in data analytics, visualization, and business intelligence to help organizations make informed decisions and drive growth.`,
}

export const stats = [
  { label: 'Projects Built', value: 4, suffix: '+' },
  { label: 'Internships', value: 3, suffix: '' },
  { label: 'CGPA', value: 7.8, suffix: '' },
  { label: 'Certifications', value: 12, suffix: '+' },
]

export const skills = [
  { name: 'Power BI', level: 90, category: 'BI & Visualization', icon: '📊' },
  { name: 'Python', level: 80, category: 'Programming', icon: '🐍' },
  { name: 'SQL', level: 82, category: 'Database', icon: '🗄️' },
  { name: 'PostgreSQL', level: 75, category: 'Database', icon: '🐘' },
  { name: 'Excel', level: 88, category: 'BI & Visualization', icon: '📈' },
  { name: 'Streamlit', level: 75, category: 'Programming', icon: '🚀' },
  { name: 'Data Analytics', level: 85, category: 'Analytics', icon: '🔍' },
  { name: 'Machine Learning', level: 65, category: 'AI/ML', icon: '🤖' },
  { name: 'Business Intelligence', level: 82, category: 'BI & Visualization', icon: '💼' },
  { name: 'Dashboard Development', level: 87, category: 'BI & Visualization', icon: '🎯' },
  { name: 'Data Visualization', level: 85, category: 'Analytics', icon: '📉' },
  { name: 'Business Development', level: 78, category: 'Business', icon: '🌐' },
]

// ─── INTERNSHIPS ────────────────────────────────────────────────────────────────
// Verified by reading actual certificate images:
//  infosys_logo.png  = Infosys Springboard logo (blue "Infosys Springboard")
//  ndv_logo.png      = NDVTechsys Solutions logo (dark blue shield with NS)
//  novitech_logo.png = NoviTech R&D logo (NT diamond logo)
//  intern_cert.png   = Infosys Springboard completion cert — ScreenSense: Kids' Screentime Visualization, Feb 5–Apr 3, 2026
//  intern_img2.png   = NDV Techsys cert of internship — AI/ML Data Expert, June–July 2025, ID: TZABF0-CE000004
//  intern_img1.png   = NoviTech R&D cert of completion — Data Analytics, May 21–June 21, 2025, ID: DAIN9191

export const experience = [
  {
    id: 'infosys',
    role: 'Data Visualization Intern',
    company: 'Infosys Springboard',
    period: 'Feb 5, 2026 – Apr 3, 2026',
    logo: '/assets/internship/infosys_logo.png',
    desc: 'Completed Internship 6.0 (Batch 13) — "ScreenSense: Kids\' Screentime Visualization" under Infosys Springboard. Built an interactive Power BI dashboard to help parents monitor and manage children\'s screen time habits.',
    tags: ['Power BI', 'Data Visualization', 'DAX', 'Dashboard Development'],
    color: '#00D9FF',
    responsibilities: [
      'Developed the ScreenSense Kids\' Screentime Analytics dashboard in Power BI',
      'Analyzed children\'s digital behavior data to identify usage patterns and trends',
      'Created DAX measures for KPI tracking and time-series analysis',
      'Designed parent-friendly visual reports with age-group segmentation',
      'Completed all mandatory assignments per Infosys Springboard curriculum',
    ],
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Modeling', 'Infosys Springboard Platform'],
    skills: ['Dashboard Development', 'Data Visualization', 'Business Intelligence', 'Report Design'],
    achievements: [
      'Successfully completed Infosys Springboard Internship 6.0 (Batch 13)',
      'Delivered ScreenSense Kids\' Screentime Visualization dashboard',
      'Certificate signed by Satheesha B. Nanjappa, SVP & Head Education — Infosys Limited',
    ],
    images: ['/assets/internship/intern_cert.png'],
    cert: '/assets/internship/intern_cert.png',
  },
  {
    id: 'ndv',
    role: 'AI/ML Data Expert Intern',
    company: 'NDV Techsys Solutions Pvt Ltd',
    period: 'June 2025 – July 2025',
    logo: '/assets/internship/ndv_logo.png',
    desc: 'Completed the AI/ML Data Expert Internship at NDV Techsys Solutions — an MSME registered and AICTE Approved Partner. Demonstrated excellence in all assigned tasks and projects. Certificate ID: TZABF0-CE000004.',
    tags: ['Python', 'Machine Learning', 'AI', 'Data Processing'],
    color: '#7C3AED',
    responsibilities: [
      'Processed and cleaned large datasets for machine learning model training',
      'Assisted in building, training, and evaluating ML models',
      'Developed Python automation scripts for data preprocessing pipelines',
      'Analysed model performance metrics and implemented improvements',
      'Maintained excellent attendance and work ethic throughout the programme',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    skills: ['Machine Learning', 'Data Processing', 'Python Programming', 'Model Evaluation'],
    achievements: [
      'Certificate ID: TZABF0-CE000004 — issued by NDV Techsys Solutions',
      'Recognised by Directors Narendra Macherla & Vijaya Durga Inturi',
      'AICTE Approved Partner — VidyaNypunya partner in Continuous Learning',
    ],
    images: ['/assets/internship/intern_img2.png'],
    cert: '/assets/internship/intern_img2.png',
  },
  {
    id: 'novitech',
    role: 'Data Analyst Intern',
    company: 'NoviTech R&D Pvt Ltd',
    period: 'May 21, 2025 – June 21, 2025',
    logo: '/assets/internship/novitech_logo.png',
    desc: 'Completed a one-month Data Analytics internship at NoviTech R&D Private Limited — an ISO 9001:2015 certified company. Certificate ID: DAIN9191. Signed by Mr. A. Vinothkumar, Director.',
    tags: ['Data Analytics', 'Excel', 'SQL', 'Business Reporting'],
    color: '#F59E0B',
    responsibilities: [
      'Collected, cleaned, and organised datasets from multiple business sources',
      'Performed exploratory data analysis to uncover key trends and patterns',
      'Built Excel dashboards for sales and operational performance tracking',
      'Generated weekly analytical reports for management review',
      'Identified and resolved data quality issues across datasets',
    ],
    technologies: ['Excel', 'SQL', 'Power BI', 'Python', 'Data Analysis Tools'],
    skills: ['Data Analysis', 'Report Generation', 'Data Cleaning', 'Business Reporting'],
    achievements: [
      'Certificate ID: DAIN9191 — ISO 9001:2015 certified company',
      'Certified by Mr. A. Vinothkumar, Director — NoviTech R&D Pvt. Ltd., Coimbatore',
      'Successfully completed full one-month internship in Data Analytics',
    ],
    images: ['/assets/internship/intern_img1.png'],
    cert: '/assets/internship/intern_img1.png',
  },
]

export const projects = [
  {
    id: 'jobmarket',
    title: 'Job Market Analysis TN',
    subtitle: 'Streamlit Dashboard',
    desc: 'An interactive Streamlit dashboard analyzing job trends, demand, salary patterns, and employment opportunities across Tamil Nadu.',
    longDesc: 'Developed a comprehensive Streamlit web application to analyze the Tamil Nadu job market. The dashboard provides insights into employment trends, skill demands, salary distributions, and regional job opportunities. Features interactive filters, dynamic charts, and downloadable reports.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    color: '#00D9FF',
    icon: '📊',
    github: 'https://github.com/Gokulvmg',
    demo: 'https://job-market-dashboard-vn9xbs6icdzr8zgamnxb4c.streamlit.app/',
    images: ['/assets/projects/jobmarket1.png', '/assets/projects/jobmarket2.png'],
    cover: '/assets/projects/jobmarket1.png',
    problem: 'Job seekers in Tamil Nadu lacked a centralized platform to understand job market trends, salary benchmarks, and skill demands across different regions and industries.',
    objectives: ['Analyze job posting trends across Tamil Nadu', 'Identify high-demand skills and roles', 'Visualize salary distributions by sector', 'Provide actionable insights for job seekers'],
    dataset: 'Aggregated job data from multiple portals covering job postings across Tamil Nadu regions and industries.',
    features: ['Interactive filters by location, industry, salary', 'Trend analysis with time-series charts', 'Skill demand heatmaps', 'Salary distribution plots', 'Exportable reports as CSV'],
    outcomes: ['Identified top in-demand skills in Tamil Nadu', 'Mapped regional salary disparities', 'Deployed as live Streamlit web application'],
  },
  {
    id: 'screentime',
    title: 'Indian Kids Screen Time',
    subtitle: 'Analytics Dashboard',
    desc: 'A smart Power BI dashboard helping parents monitor and improve children\'s digital habits with insightful visual analytics. Core project for Infosys Springboard internship.',
    longDesc: 'An advanced analytics dashboard built in Power BI designed to help Indian parents understand and manage their children\'s screen time habits. This was the core deliverable for the Infosys Springboard ScreenSense internship. Includes behavioral analysis, age-group comparisons, content categorization, and personalized recommendations.',
    stack: ['Power BI', 'Excel', 'DAX'],
    color: '#F59E0B',
    icon: '📱',
    github: 'https://github.com/Gokulvmg',
    demo: 'https://elcotedu-my.sharepoint.com/:u:/g/personal/s0451922_edu_elcot_in/IQDnkusrMxYaT6kdRdCyfjYCAbjkclljcITGvNOiMWBvuYU?e=olxv6v',
    images: ['/assets/projects/screentime1.png', '/assets/projects/screentime2.png', '/assets/projects/screentime3.png', '/assets/projects/screentime4.png'],
    cover: '/assets/projects/screentime1.png',
    problem: 'Indian parents lacked data-driven tools to monitor and understand their children\'s screen time patterns and their impact on development.',
    objectives: ['Track daily screen time by age group', 'Categorize content consumption patterns', 'Identify unhealthy usage patterns', 'Provide actionable recommendations for parents'],
    dataset: 'Survey and behavioral data covering children aged 3–18 years across Indian households.',
    features: ['Age-group segmented analysis', 'Content category breakdown (YouTube, gaming, social)', 'Weekly/monthly trend tracking', 'Health impact indicators', 'Parental control recommendations'],
    outcomes: ['Delivered as Infosys Springboard ScreenSense internship project', 'Identified peak screen time hours (7–9 PM)', 'YouTube and gaming account for majority of screen time'],
  },
  {
    id: 'business',
    title: 'Business Insights & Sales',
    subtitle: 'Performance Dashboard',
    desc: 'Advanced Power BI dashboard for analyzing sales, profit, regional performance, category trends, and target achievement.',
    longDesc: 'A comprehensive business intelligence dashboard providing 360-degree visibility into organizational performance. Built with advanced DAX measures, the dashboard enables executive-level decision making through real-time KPI tracking, regional performance analysis, and trend insights.',
    stack: ['Power BI', 'DAX', 'Excel'],
    color: '#10B981',
    icon: '💼',
    github: 'https://github.com/Gokulvmg',
    demo: 'https://elcotedu-my.sharepoint.com/:u:/g/personal/s0451922_edu_elcot_in/IQDF8k1EASLxRLjr9RyaahvXAZdlSNjqcWh7EZHzbUDzHfQ?e=8ZsBuP',
    images: ['/assets/projects/business1.png', '/assets/projects/business2.png', '/assets/projects/business3.png'],
    cover: '/assets/projects/business1.png',
    problem: 'Business executives lacked a unified view of sales performance, regional trends, and target achievement from disparate data sources.',
    objectives: ['Centralize business performance metrics', 'Track regional and product performance', 'Monitor KPIs vs targets in real-time', 'Enable drill-down analysis for decisions'],
    dataset: 'Multi-year sales transaction data across product categories, regional performance, and revenue targets.',
    features: ['Executive KPI scorecard', 'Regional performance heatmap', 'Product category analysis', 'Target vs actual comparison', 'YoY and MoM trend analysis', 'Drill-through capabilities'],
    outcomes: ['Reduced manual reporting effort significantly', 'Identified underperforming regions for action', 'Enabled data-driven sales strategy discussions'],
  },
]

export const education = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    institution: 'Info Institute of Engineering',
    location: 'Coimbatore, Tamil Nadu',
    score: 'CGPA: 7.8',
    period: '2022 – 2026',
    icon: '🎓',
    coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Machine Learning', 'Data Mining', 'Statistical Analysis', 'Cloud Computing', 'Software Engineering', 'Computer Networks'],
    achievements: [
      'Consistent academic performer with 7.8 CGPA',
      'Deputy Secretary of INFINIT — IT Department Association (2025–26)',
      'Data Science Core Team Member — GDG on Campus, Info Institute (2025–26)',
      'All Avenue Director — Rotaract Club of Info Institute (2025–26)',
      'Completed 3 industry internships during degree programme',
      'Published research paper in IJSDR (Vol 11, Apr 2026, Impact Factor 9.15)',
      'Presented paper at NCASTM-2026 National Conference (Apr 7, 2026)',
      'Presented paper at ICCII-2026 International Conference, Velammal Institute of Technology (Mar 27–28, 2026)',
    ],
    color: '#00D9FF',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary (12th)',
    field: 'Science Stream',
    institution: 'Govt. Higher Secondary School Ashokapuram',
    location: 'Coimbatore, Tamil Nadu',
    score: 'Percentage: 70.6%',
    period: '2021 – 2022',
    icon: '🏫',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English'],
    achievements: ['Secured 70.6% in Higher Secondary Board Examinations', 'Active participant in school science and technology events'],
    color: '#7C3AED',
  },
]

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────
// Verified by reading every image:
//  association1.jpg = INFINIT Designation Letter — Deputy Secretary appointment, Academic Year 2025-26
//  association2.png = INFINIT event — Gokul receiving appointment letter on stage
//  association3.jpg = Gokul speaking at INFINIT event podium
//  association4.jpg = Official poster "DEPUTY SECRETARY — GOKUL V M", Dept of IT, Info Institute
//  gdg1.png         = GDG GENESIS Inauguration Ceremony 2025 — group photo with core team certificates
//  gdg2.png         = GDG Core Team 2025-26 card — "GOKUL V M, DATA SCIENCE CORE TEAM MEMBER"
//  rotaract1.jpg    = Rotaract official poster — "RTR GOKUL V M, DIRECTOR OF ALL-AVENUE" (2025-26)
//  rotaract2.png    = Rotaract Club "Act Make an Impact" event — Gokul receiving appointment letter
//  rotaract3.jpg    = Rotaract appointment letter — "All Avenue Director, 2025-2026", signed by President Rinesh Guru
//  ncc1.png (=gdg_appointment.png) = GDG appointment letter confirming Data Science Core Team Member 2025-26
//  ncc.pdf          = NCC "A" Certificate (PDF)

export const leadership = [
  {
    id: 'association',
    role: 'Deputy Secretary — INFINIT',
    org: 'Department of Information Technology Association, Info Institute of Engineering',
    icon: '🎯',
    color: '#00D9FF',
    images: [
      '/assets/roles/association4.jpg',
      '/assets/roles/association1.jpg',
      '/assets/roles/association2.png',
      '/assets/roles/association3.jpg',
    ],
    responsibilities: [
      'Appointed as Deputy Secretary of INFINIT (Dept. of IT Association) for Academic Year 2025–26',
      'Assisted in planning, organizing, and coordinating departmental and association activities',
      'Ensured proper communication between members, maintaining discipline',
      'Supported the overall objectives of INFINIT — "Involve, Inspire, Illuminate"',
      'Worked alongside President Ajay Vetri N.J. and General Secretary Dharchana A.',
    ],
    achievements: [
      'Officially appointed by Staff Coordinator Mr. Madheswaran K. & HoD Mr. Arockia Selvaraj A.',
      'Contributed to smooth functioning of INFINIT for Academic Year 2025–26',
      'Led departmental events and association activities',
    ],
    desc: 'Appointed as Deputy Secretary of INFINIT — the Department of Information Technology Association at Info Institute of Engineering — for Academic Year 2025–26. Guided by the theme "Involve, Inspire, Illuminate."',
  },
  {
    id: 'rotaract',
    role: 'All Avenue Director',
    org: 'Rotaract Club of Info Institute of Engineering — RI District 3206',
    icon: '🌐',
    color: '#7C3AED',
    images: [
      '/assets/roles/rotaract1.jpg',
      '/assets/roles/rotaract2.png',
      '/assets/roles/rotaract3.jpg',
    ],
    responsibilities: [
      'Appointed as Director of All-Avenue for Rotary Year 2025–2026',
      'Played an integral part in advancing the mission of the Rotaract Club',
      'Fostered unity among members and drove impactful community initiatives',
      'Advanced the club\'s theme: "Act, Make an Impact" and district theme "See Beyond, Serve Ahead"',
      'Worked under President Rtr. Rinesh Guru S. (2025–26)',
    ],
    achievements: [
      'Selected as All Avenue Director — Rotaract Club of INFO Institute of Engineering (Club ID: 89603)',
      'Officially appointed via letter from President Rtr. Rinesh Guru S., Secretary Rtr. Jothimani G.',
      'Rotary Year 2025–26, RI District 3206, Sponsored by Rotary Club of Coimbatore',
    ],
    desc: 'Officially appointed as All Avenue Director of Rotaract Club of Info Institute of Engineering for Rotary Year 2025–2026. Instrumental in community service, leadership initiatives, and advancing club objectives under the theme "Act, Make an Impact."',
  },
  {
    id: 'gdg',
    role: 'Data Science Core Team Member',
    org: 'Google Developer Groups on Campus — Info Institute of Engineering (2025–26)',
    icon: '💻',
    color: '#F59E0B',
    images: [
      '/assets/roles/gdg2.png',
      '/assets/roles/gdg_offer_letter.png',
      '/assets/roles/gdg1.png',
    ],
    responsibilities: [
      'Appointed as Data Science Core Team Member for Academic Year 2025–26',
      'Contributed to data science projects and workshops under GDG on Campus',
      'Assisted in organizing technical sessions, workshops, and community events',
      'Collaborated with fellow members to address complex data science challenges',
      'Fostered a culture of continuous learning and innovation',
    ],
    achievements: [
      'Officially appointed by Organizer Shivashankaran R (GDGOC) — 2025-26',
      'Selected based on strong analytical skills, technical expertise, and passion for data science',
      'Participated in GDG GENESIS Inauguration Ceremony 2025 as core team member',
      'Completed Google Cloud Study Jams — Certificate of Completion',
    ],
    desc: 'Officially confirmed as Data Science Core Team Member of Google Developer Groups on Campus at Info Institute of Engineering for 2025–26. Selected for strong analytical skills and passion for data science.',
  },
  {
    id: 'ncc',
    role: 'NCC Junior Cadet',
    org: 'National Cadet Corps — Completed "A" Certificate with Grade A',
    icon: '🏅',
    color: '#10B981',
    images: [],
    cert: '/assets/roles/ncc.pdf',
    responsibilities: [
      'Participated in NCC drill, parade, and military discipline training',
      'Attended NCC camps and national integration programmes',
      'Completed community service and social welfare activities',
      'Demonstrated leadership qualities in cadet training activities',
    ],
    achievements: [
      'Completed NCC "A" Certificate Examination with Grade A',
      'Represented college in NCC activities and parades',
      'Demonstrated exemplary discipline and leadership as a Junior Cadet',
    ],
    desc: 'Completed NCC training as a Junior Cadet and earned the prestigious "A" Certificate with Grade A, demonstrating discipline, patriotism, and leadership.',
  },
]

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────
// Verified by reading every certificate image:
//  cert1.png  = Google Cloud Study Jams — GDG, Info Institute of Engineering (Completion Certificate, signed by Sivashankaran R)
//  cert2.png  = Smart India Hackathon 2024 — Info Institute of Engineering (Participation, 06/09/2024, signed by Mrs. Gokila SPoC SIH 2024)
//  cert3.png  = Infosys Springboard — Hands-On Data Visualization with Microsoft Power BI (Course Completion, Dec 26, 2025)
//  cert4.png  = Infosys Springboard — Excel (Course Completion, Dec 31, 2025)
//  cert5.png  = IBM SkillsBuild — Journey to Cloud: Envisioning Your Solution (PLAN-32CB1E21D8B4, Sep 14, 2024)
//  cert6.png  = Oracle University — Oracle Certified Foundations Associate, OCI 2023 AI Foundations (Apr 28, 2024, valid until Apr 28, 2026)
//  cert7.png  = Google Developer Student Clubs — Data Unleashed: Preprocessing & Explore ML Algorithms (Feb 3, 2024, GDSC IIE, CertificateID: gdsc-iie-du-054)
//  cert8.png  = OpenWeaver — Basics of Python Programming (Sep 20, 2023, Instructor: Pooja Agrawal)
//  cert9.png  = IJSDR — Certificate of Publication — "An AI-Based Framework for Automated Software Testing and Code Quality Assessment" (Vol 11 Issue 4, Apr 2026, Impact Factor 9.15, Paper ID: IJSDR2604272)
//  cert10.png = Info Institute of Engineering — NCASTM-2026 — "Intelligent Software Testing and Code Quality Analysis Using Machine Learning" (Apr 7, 2026, signed by Dr. N. Kottiswaran, Principal)
//  cert11.jpg = Velammal Institute of Technology — ICCII-2026 — "AI-Based Software Testing and Code Quality Analysis Framework" (Mar 27–28, 2026, ISBN: 978-81-985448-0-3)

export const certificates = [
  {
    id: 1,
    title: 'Google Cloud Study Jams',
    issuer: 'Google Developer Group — Info Institute of Engineering',
    image: '/assets/certificates/cert1.png',
    category: 'Cloud',
    date: '2024',
    desc: 'Certificate of Completion for Google Cloud Study Jams. Signed by Sivashankaran R, GDGoC Organizer.',
  },
  {
    id: 2,
    title: 'Smart India Hackathon 2024',
    issuer: 'Info Institute of Engineering / Ministry of Education / AICTE',
    image: '/assets/certificates/cert2.png',
    category: 'Hackathon',
    date: 'Sep 6, 2024',
    desc: 'Certificate of Participation in the Info Institute Internal SIH 2024 held on 06/09/2024, signed by Mrs. Gokila (SPoC, SIH 2024).',
  },
  {
    id: 3,
    title: 'Hands-On Data Visualization with Microsoft Power BI',
    issuer: 'Infosys Springboard',
    image: '/assets/certificates/cert3.png',
    category: 'Power BI',
    date: 'Dec 26, 2025',
    desc: 'Course Completion Certificate from Infosys Springboard for Hands-On Data Visualization with Microsoft Power BI.',
  },
  {
    id: 4,
    title: 'Excel — Course Completion',
    issuer: 'Infosys Springboard',
    image: '/assets/certificates/cert4.png',
    category: 'Excel',
    date: 'Dec 31, 2025',
    desc: 'Course Completion Certificate from Infosys Springboard for the Excel course, completed on December 31, 2025.',
  },
  {
    id: 5,
    title: 'Journey to Cloud: Envisioning Your Solution',
    issuer: 'IBM SkillsBuild',
    image: '/assets/certificates/cert5.png',
    category: 'Cloud',
    date: 'Sep 14, 2024',
    desc: 'IBM SkillsBuild Completion Certificate for "Journey to Cloud: Envisioning Your Solution" (PLAN-32CB1E21D8B4), completed Sep 14, 2024.',
  },
  {
    id: 6,
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University — OCI 2023 AI Foundations',
    image: '/assets/certificates/cert6.png',
    category: 'AI/ML',
    date: 'Apr 28, 2024',
    desc: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate. Signed by Damien Carey, SVP Oracle University. Valid until Apr 28, 2026.',
  },
  {
    id: 7,
    title: 'Data Unleashed: Preprocessing & Explore ML Algorithms',
    issuer: 'Google Developer Student Clubs (GDSC IIE)',
    image: '/assets/certificates/cert7.png',
    category: 'AI/ML',
    date: 'Feb 3, 2024',
    desc: 'Certificate of Participation — session "Data Unleashed: Preprocessing & Explore ML Algorithms", Feb 3, 2024. In collaboration with Innomatics Research Labs. CertificateID: gdsc-iie-du-054.',
  },
  {
    id: 8,
    title: 'Basics of Python Programming',
    issuer: 'OpenWeaver',
    image: '/assets/certificates/cert8.png',
    category: 'Programming',
    date: 'Sep 20, 2023',
    desc: 'Certificate of Participation for completing the "Basics of Python Programming" Training on Sep 20, 2023. Verification Number: 24771048859305.',
  },
  {
    id: 9,
    title: 'Research Publication — IJSDR',
    issuer: 'International Journal of Scientific Development and Research (ISSN: 2455-2631)',
    image: '/assets/certificates/cert9.png',
    category: 'Research',
    date: 'April 2026',
    desc: '"An AI-Based Framework for Automated Software Testing and Code Quality Assessment." Vol 11 Issue 4, Apr 2026, Impact Factor: 9.15 (Google Scholar). Paper ID: IJSDR2604272, Registration ID: 308912.',
  },
  {
    id: 10,
    title: 'NCASTM-2026 — National Conference Paper Presentation',
    issuer: 'Info Institute of Engineering, Coimbatore',
    image: '/assets/certificates/cert10.png',
    category: 'Research',
    date: 'Apr 7, 2026',
    desc: '"Intelligent Software Testing and Code Quality Analysis Using Machine Learning." National Conference on Advances in Science, Technology and Management (NCASTM-2026), Apr 7, 2026. Signed by Dr. N. Kottiswaran, Principal.',
  },
  {
    id: 11,
    title: 'ICCII-2026 — International Conference Paper Presentation',
    issuer: 'Velammal Institute of Technology, Chennai (RI SEINDIA)',
    image: '/assets/certificates/cert11.jpg',
    category: 'Research',
    date: 'Mar 27–28, 2026',
    desc: '"AI-Based Software Testing and Code Quality Analysis Framework." 7th International Conference on Computational Intelligence and Industry 5.0 (ICCII-2026), Mar 27–28, 2026. ISBN: 978-81-985448-0-3.',
  },
  {
    id: 12,
    title: 'Master SQL For Data Science',
    issuer: 'Udemy — Instructor: Job Ready Programmer',
    image: '/assets/certificates/cert12.jpg',
    category: 'Database',
    date: 'May 25, 2026',
    desc: 'Certificate of Completion for "Master SQL For Data Science" on Udemy. 9.5 total hours. Certificate no: UC-6fac2347-884d-4229-a993-1fad8126d2fa.',
  },
]

// ─── GALLERY ─────────────────────────────────────────────────────────────────
export const galleryImages = [
  // Association (INFINIT IT)
  { src: '/assets/roles/association4.jpg', category: 'Events', caption: 'GOKUL V M — Deputy Secretary, Dept. of IT Association' },
  { src: '/assets/roles/association2.png', category: 'Events', caption: 'INFINIT Event — Receiving Appointment Letter on Stage' },
  { src: '/assets/roles/association3.jpg', category: 'Events', caption: 'INFINIT Event — Gokul Addressing at Podium' },
  { src: '/assets/roles/association1.jpg', category: 'Events', caption: 'INFINIT Designation Letter — Deputy Secretary 2025–26' },
  // GDG
  { src: '/assets/roles/gdg2.png', category: 'Workshops', caption: 'GDG Core Team 2025-26 — Data Science Core Team Member' },
  { src: '/assets/roles/gdg1.png', category: 'Workshops', caption: 'GDG GENESIS Inauguration Ceremony 2025 — Core Team' },
  { src: '/assets/roles/gdg_offer_letter.png', category: 'Workshops', caption: 'GDG Offer Letter — Data Science Core Team Member 2025–26' },
  // Rotaract
  { src: '/assets/roles/rotaract1.jpg', category: 'Events', caption: 'Rotaract — Director of All-Avenue, Rtr. Gokul V M (2025–26)' },
  { src: '/assets/roles/rotaract2.png', category: 'Events', caption: 'Rotaract "Act Make an Impact" — Receiving Appointment Letter' },
  { src: '/assets/roles/rotaract3.jpg', category: 'Events', caption: 'Rotaract Appointment Letter — All Avenue Director 2025–26' },
  // Internships
  { src: '/assets/internship/intern_img1.png', category: 'Internships', caption: 'NoviTech R&D — Data Analytics Internship Certificate' },
  { src: '/assets/internship/intern_img2.png', category: 'Internships', caption: 'NDV Techsys — AI/ML Data Expert Internship Certificate' },
  { src: '/assets/internship/intern_cert.png', category: 'Internships', caption: 'Infosys Springboard — ScreenSense Internship Certificate' },
  // Projects
  { src: '/assets/projects/jobmarket1.png', category: 'Projects', caption: 'Job Market Analysis TN — Streamlit Dashboard' },
  { src: '/assets/projects/jobmarket2.png', category: 'Projects', caption: 'Job Market Dashboard — Analytics View' },
  { src: '/assets/projects/screentime1.png', category: 'Projects', caption: 'Kids Screen Time Dashboard — Overview' },
  { src: '/assets/projects/screentime2.png', category: 'Projects', caption: 'Screen Time — Age Group Analysis' },
  { src: '/assets/projects/screentime3.png', category: 'Projects', caption: 'Screen Time — Content Category Breakdown' },
  { src: '/assets/projects/business1.png', category: 'Projects', caption: 'Business Insights Dashboard — KPI Overview' },
  { src: '/assets/projects/business2.png', category: 'Projects', caption: 'Sales Performance — Regional Analysis' },
]
