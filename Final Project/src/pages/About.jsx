import { FaCheckCircle, FaBolt, FaShieldAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to stay organized
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We've stripped away the clutter to provide you with a tool that
              just works. No learning curve, just productivity.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <FaBolt className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Instant Updates
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Changes happen in real-time. Toggle tasks, edit details, and
                  see updates instantly across your session without refreshing.
                </dd>
              </div>

              <div className="relative">
                <div>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <FaShieldAlt className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Secure & Private
                  </p>
                </div>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Your data is yours. We use industry-standard authentication
                  and database security to keep your tasks private.
                </div>
              </div>

              <div className="relative">
                <div>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <FaCheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Simple Workflow
                  </p>
                </div>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  Add, edit, complete, delete. The core CRUD operations you need
                  without the bloat you don't.
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
