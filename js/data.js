/* ===== Portfolio Data — single source of truth ===== */
/* Not required for the current static HTML build, but useful for
   future refactors (e.g. rendering projects/skills dynamically). */
window.PORTFOLIO_DATA = {
  name: 'Anuj rai',
  role: 'Software Engineer & Systems Builder',
  location: 'Lucknow, Uttar Pradesh, India',
  github: 'https://github.com/raianujrai33-web',
  linkedin: 'https://linkedin.com/in/anujrai',
  leetcode: 'https://leetcode.com/',
  email: 'anuj.rai@email.com',
  stats: [
    { value: 250, label: 'DSA Problems' },
    { value: 15, label: 'Years Experience' },
    { value: 6, label: 'Projects Built' }
  ],
  projects: [
    {
      title: 'Durga Interiors Platform',
      tag: 'Full-Stack',
      description: 'Multi-page commercial web app & digital portfolio for high-end interior contracts, material specs, and client pipelines.',
      stack: ['HTML5', 'CSS', 'JavaScript'],
      link: 'https://github.com/raianujrai33-web'
    },
    {
      title: 'TaskFlow — Task Manager',
      tag: 'Full-Stack',
      description: 'Responsive productivity app with local storage persistence, priority tagging, and real-time search filtering.',
      stack: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/raianujrai33-web'
    },
    {
      title: 'Pathfinding Visualizer',
      tag: 'Algorithms',
      description: "Interactive grid simulation demonstrating Dijkstra's, A*, BFS, and DFS algorithms in real time.",
      stack: ['JavaScript', 'CSS Grid'],
      link: 'https://github.com/raianujrai33-web'
    },
    {
      title: 'E-Commerce Website',
      tag: 'Frontend',
      description: 'Online store with product listing, shopping cart, and responsive mobile-first design.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/raianujrai33-web'
    }
  ],
  skills: [
    { category: 'Languages & Core', items: ['C++', 'Java', 'Python', 'JavaScript (ES6+)', 'SQL'] },
    { category: 'Web & Frontend', items: ['HTML5', 'CSS3', 'React.js', 'Responsive UI/UX', 'DOM'] },
    { category: 'Backend & Tools', items: ['Node.js', 'REST APIs', 'Git & GitHub', 'Linux', 'VS Code'] },
    { category: 'Domain & Engineering', items: ['System Architecture', 'Algorithmic Optimization', 'Material Science'] }
  ]
};