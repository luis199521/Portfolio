import {
  SiLaravel,
  SiReact,
  SiMongodb,
  SiMysql,
  SiJquery,
  SiPython,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
} from 'react-icons/si';

const Skills = () => {
  const techStack = [
    { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
    { name: 'React.js', icon: <SiReact className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'jQuery', icon: <SiJquery className="text-purple-600" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-indigo-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-700" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-3">{tech.icon}</div>
            <p className="text-center font-semibold text-gray-900 dark:text-white">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
