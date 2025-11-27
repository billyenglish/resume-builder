import { FaUser, FaLink, FaBrain, FaSuitcase, FaFolderOpen, FaGraduationCap, FaAward, FaEye, FaTrash } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { VscOpenPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const navMenu = [
    {
        navTitle: 'Personal Details',
        navIcon: <FaUser />,
        navLink: '/personal-details',
        id: 0
    },
    {
        navTitle: 'Link',
        navIcon: <FaLink />,
        navLink: '/links',
        id: 1
    },
    {
        navTitle: 'Technical Skills',
        navIcon: <FaBrain />,
        navLink: '/technical-skills',
        id: 2
    },
    {
        navTitle: 'Work Experience',
        navIcon: <FaSuitcase />,
        navLink: '/work-experience',
        id: 3
    },
    {
        navTitle: 'Projects',
        navIcon: <FaFolderOpen />,
        navLink: '/projects',
        id: 4
    },
    {
        navTitle: 'Graduation',
        navIcon: <FaGraduationCap />,
        navLink: '/graduation',
        id: 5
    },
    {
        navTitle: 'Awards',
        navIcon: <FaAward />,
        navLink: 'awards',
        id: 6
    },
    {
        navTitle: 'Menu',
        navIcon: <GoKebabHorizontal />,
        navLink: 'menu',
        id: 7
    }
]

const Nav = () => {

    return (
        <nav className="min-h-screen w-22 absolute top-0 flex flex-col justify-center items-center gap-12">
            <ul className="flex flex-col gap-6">
                {navMenu.map((navItems) => (
                    <li className="text-3xl" key={navItems.id}>
                        <Link to={navItems.navLink}>
                            {navItems.navIcon}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col gap-6">
                <li className="text-3xl">
                    <VscOpenPreview />
                </li>
                <li className="text-3xl">
                    <FaEye />
                </li>
            </ul>

            <ul>
                <li className="text-3xl">
                    <FaTrash />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;