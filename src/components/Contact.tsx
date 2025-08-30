const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Contact
      </h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm currently open to full-time opportunities and employer sponsorship (subclass 482). Feel free to reach out if you'd like to collaborate or discuss a role.
        </p>
        <div className="space-y-4 text-base">
          <p>
            📧 <span className="font-medium">Email:</span>{' '}
            <a
              href="mailto:luis.21099592@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              luis.21099592@gmail.com
            </a>
          </p>
          <p>
            💼 <span className="font-medium">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/luis-alvarez-a7531828a/"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/luis-alvarez-a7531828a
            </a>
          </p>
          <p>
            🧑‍💻 <span className="font-medium">GitHub:</span>{' '}
            <a
              href="https://github.com/luis199521"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/luis199521
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
