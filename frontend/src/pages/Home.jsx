import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap } from "lucide-react";

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

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5">
          <div className="rounded-lg bg-amber-50 p-3 text-neutral-800">
            <Users size={20} strokeWidth={1.7} />
          </div>

          <div>
            <h2 className="font-medium text-neutral-900">Student Records</h2>
            <p className="mt-1 text-sm leading-5 text-neutral-500">
              View and manage all registered students.
            </p>
            <Link
              to="/students"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-neutral-500"
            >
              Open records <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-amber-50/60 p-5">
          <div className="rounded-lg border border-amber-100 bg-white p-3 text-neutral-800">
            <GraduationCap size={20} strokeWidth={1.7} />
          </div>

          <div>
            <h2 className="font-medium text-neutral-900">Simple Management</h2>
            <p className="mt-1 text-sm leading-5 text-neutral-600">
              Add students, edit their details, and remove outdated records.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
