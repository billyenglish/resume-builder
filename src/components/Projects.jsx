import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button"

const Projects = () => {

    return (
        <>
            <Nav />
            <section className="min-h-screen flex flex-col justify-center items-center gap-12">
                <div className="flex justify-between items-center w-160">

                    <h2 className="text-3xl font-extralight">Projects</h2>

                    <div className="flex gap-4">
                        <Button
                            text="Next"
                            className="border text-lg w-20 pt-0.1 pb-0.1 rounded-xs cursor-pointer"
                        />

                        <Button
                            text="Next"
                            className="border text-lg w-20 p-1 pt-0.5 pb-0.5 rounded-xs cursor-pointer"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;