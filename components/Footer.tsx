import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left lg:px-10">
        <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        <p>{person.location}</p>
      </div>
    </footer>
  );
}
