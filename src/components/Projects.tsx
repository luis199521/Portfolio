const Projects = () => {
  const projects = [
    {
      title: 'Greenhouse – Nursery Management App',
      description:
        'Cross-platform system for managing plant propagation and maintenance in nursery environments. Includes QR code tracking, secure API access, and mobile integration.',
      tech: ['PHP', 'Laravel', 'Flutter', 'MySQL', 'JWT', 'Endroid QR-Code'],
      github: 'https://github.com/luis199521/Nursery-Management-BE',
    },
    {
      title: 'WITS – Student Roster Management',
      description:
        'Web-based system for managing student class rosters with photos and personal details, providing lecturers with visual cheat sheets for their sessions.',
      tech: ['Laravel 11', 'PHP 8.3', 'SQL'],
      github: 'https://github.com/luis199521/wits-2025-s1',
    },
    {
      title: 'Library Management System',
      description:
        'Application for managing library operations including books, users, and loans. Features secure authentication and an admin dashboard.',
      tech: ['PHP 8.1', 'MySQL', 'jQuery', 'AdminLTE'],
      github: 'https://github.com/luis199521/Library-Managment',
    },
    {
      title: 'VetCompare – SEO-Friendly Service Comparison',
      description:
        'Responsive website for comparing veterinary clinics across Perth by location, services, and ratings. Includes booking forms, SEO optimization, and Google site verification.',
      tech: ['PHP', 'Custom CSS', 'JavaScript', 'robots.txt', 'sitemap.xml'],
      github: 'https://github.com/luis199521/VetCompareAu',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
