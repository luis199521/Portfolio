const Education = () => {
  const studies = [
    {
      institution: 'Institución Universitaria Salazar y Herrera (IUSH)',
      program: 'Systems Engineering – Information Technology',
      year: 'Completed in 2019',
      location: 'Colombia',
    },
    {
      institution: 'North Metropolitan TAFE',
      program: 'Certificate IV in Information Technology (Web Development)',
      year: 'Completed in 2024',
      location: 'Perth, Australia',
    },
    {
      institution: 'North Metropolitan TAFE',
      program: 'Diploma in Information Technology (Backend Development)',
      year: 'Completed in 2025',
      location: 'Perth, Australia',
    },
  ];

  return (
    <section id="education" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {studies.map((study, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{study.institution}</h3>
            <p className="text-gray-700 dark:text-gray-300">{study.program}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{study.year} – {study.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
