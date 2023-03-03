export default function TopNavBar() {
    return (
      <nav className="text-center text-lg overflow-hidden no-underline py-3.5 px-4 bg-red-100 w-96 mx-auto rounded-b-2xl">
        <div className="container flex flex-wrap items-center justify-between mx-auto font-a">
            <a href='#about' className="py-3.5 px-4">About</a>
            <a href='#portfolio' className="py-3.5 px-4">Portfolio</a>
            <a href="#skills" className="py-3.5 px-4">Skills</a>
            <a href='#contact' className="py-3.5 px-4">Contact</a>
        </div>
      </nav>
    );
  }