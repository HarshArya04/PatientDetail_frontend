export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
        About Jarurat Care
      </h1>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl">
        Jarurat Care is a simple React application to manage and view patient
        records. Built using React, Tailwind CSS, and state management with
        React Hooks.
      </p>
    </div>
  );
}
