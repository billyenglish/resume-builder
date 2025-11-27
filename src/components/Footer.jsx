const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-center items-center absolute bottom-0 w-full h-10">
            <p className="text-md font-normal"><span className="text-lg">&copy;</span> <span>{currentYear} </span>
                Interactive Resume Builder · Designed and developed by Billy English
            </p>
        </footer>
    );
};

export default Footer;