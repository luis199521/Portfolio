//import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-6 py-40"
    >
      <img
        //src={profile}
        alt="Luis Alvarez"
        className="w-44 h-44 rounded-full object-cover mb-8 shadow-lg border-4 border-blue-500"
      />
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">Luis Alvarez</h1>
      <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">Full-Stack Developer</h2>
      <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Experienced in building scalable web applications and RESTful APIs using Laravel. Bachelor in Computer science in Colombia and Cert IV & Diploma in Backend Development at TAFE Perth, with experience in WordPress plugin/theme development, React, MySQL, Tailwind CSS, and SEO-friendly web design.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/luis199521"
          target="_blank"
          className="bg-gray-900 dark:bg-gray-700 text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 dark:hover:bg-gray-600 transition text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luis-alvarez-a7531828a/"
          target="_blank"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Home;
