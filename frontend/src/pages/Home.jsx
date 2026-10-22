import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

function Home() {
  return (
    <div className="space-y-8">
      <section className="grid items-center gap-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Everything about your students, in one place.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
            Manage student details, keep records organized, and update
            information whenever you need.
          </p>

          <Link
            to="/students"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            <Users size={16} />
            View Students
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="min-w-0">
          <img
            src="/student-management.png"
            alt="Student records and profile management illustration"
            className="h-auto w-full object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
