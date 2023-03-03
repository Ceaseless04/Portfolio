export default function TopNavBar() {
    return (
      <nav className="text-center text-lg overflow-hidden no-underline py-3.5 px-4 bg-red-100 w-96 mx-auto rounded-b-2xl">
        <a href='#about' className="py-3.5 px-4">About</a>
        <button>
            <a href='#skills' className="py-3.5 px-4">Skills</a>
        </button>
        <a href='#portfolio' className="py-3.5 px-4">Portfolio</a>
        <a href='#contact' className="py-3.5 px-4">Contact</a>
      </nav>
    );
  }