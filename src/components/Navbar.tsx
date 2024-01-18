// import FileDownloadButton from "./FileDownloadButton";
import TextButton from "./TextButton";

const Navbar = () => {
    const contactElement = document.getElementById("contact");
    const handleClick = () => {
        contactElement?.scrollIntoView({behavior: 'smooth'});
    };

    return (
      <nav className="bg-sky-800 p-4 fixed w-full z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-lg">
                NS
            </div>
            <div className="space-x-4 flex">
                <TextButton handleClick={handleClick} text="Contact" />
                {/* <FileDownloadButton /> */}
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;