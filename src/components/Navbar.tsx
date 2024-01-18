// import FileDownloadButton from "./FileDownloadButton";
import TextButton from "./TextButton";

interface NavbarProps {
    contactSectionRef: React.LegacyRef<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({contactSectionRef}) => {
    const handleClick = () => {
        // @ts-expect-error ref does have 'current' propery
        if (contactSectionRef && contactSectionRef.current) {
            // @ts-expect-error ref does have 'current' propery
            contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
      <nav className="bg-sky-800 p-4 fixed w-full z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-lg">
                NS
            </div>
            <div className="space-x-4 flex">
                <TextButton handleClick={(handleClick)} text="Contact" />
                {/* <FileDownloadButton /> */}
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;