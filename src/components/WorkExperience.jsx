import Nav from "./Nav"
import Footer from "./Footer"
import Input from "../subcomponents/Input"
import Button from "../subcomponents/Button"


const WorkExperience = () => {

    return (
        <>
            <Nav />
            <section className="min-h-screen flex flex-col justify-center items-center gap-12">
                <div className="flex justify-between items-center w-160">

                    <h2 className="text-3xl font-extralight">Work Experience</h2>

                    <div className="flex gap-4">
                        <Button
                            text="Next"
                            className="border text-lg w-20 pt-0.1 pb-0.1 rounded-xs cursor-pointer"
                        />

                        <Button
                            text="Back"
                            className="border text-lg w-20 p-1 pt-0.5 pb-0.5 rounded-xs cursor-pointer"
                        />
                    </div>
                </div>

                <form className="border flex flex-col items-center h-132 w-160 rounded-r-xs p-6 gap-4">
                    <div className="flex gap-8">
                        <label className="flex flex-col gap-1 text-md">
                            Company Name:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Full Name"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-md">
                            Job Title:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Job Title"
                            />
                        </label>
                    </div>

                    <div className="flex gap-8">
                        <label className="flex flex-col gap-1 text-md">
                            Duration:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Full Name"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-md">
                            Address:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Job Title"
                            />
                        </label>
                    </div>

                </form>
            </section>
            <Footer />
        </>
    );
};

export default WorkExperience;