import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Professional Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-2">
            <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Technology Implementer – Dico Exhibición y Diseño Comercial
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Itagüí, Antioquia, Colombia · Full Time · Jan 2020 – Sep 2022
          </p>
          <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Developed and maintained responsive websites and virtual stores.</li>
            <li>Implemented new features and improvements in the company’s CRM systems.</li>
            <li>Diagnosed and resolved system functionality issues across departments.</li>
            <li>Conducted SEO analysis to improve search engine visibility.</li>
            <li>Created technical documentation and user manuals for CRM and web updates.</li>
            <li>Delivered training sessions to internal users on CRM usage and management.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
