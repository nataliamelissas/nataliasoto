interface ScreenSectionProps {
    mode: 'light' | 'dark';
    header: string;
    subheader: string;
    children?: React.ReactNode;
}

const ScreenSection: React.FC<ScreenSectionProps> = ({mode, header, subheader, children}) => {
    return (
        <section className={`${mode === 'light' ? 'bg-white text-slate-800' : 'bg-purple-950 text-white'} min-h-screen flex items-top`}>
            <div className="flex-grow text-left m-10">
                <h2 className="text-4xl font-bold mb-4">{header}</h2>
                <p className="text-lg">{subheader}</p>
                {children}
            </div>
      </section>
    )
}

export default ScreenSection;