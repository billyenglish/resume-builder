import Nav from "./Nav"
import Footer from "./Footer"
import Button from "../subcomponents/Button"
import Input from "../subcomponents/Input"

const Skills = () => {

    return (
        <>
            <Nav />
            <section className="min-h-screen flex flex-col justify-center items-center gap-12">
                <div className="flex justify-between items-center w-160">

                    <h2 className="text-3xl font-extralight">Skills</h2>

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

                <form className="border flex flex-col items-center h-130 w-160 rounded-r-xs p-4 gap-2">

                    <div className="flex justify-between w-full pt-2 pb-2 pr-1 pl-1">
                        <h2 className="text-xl">Technicial Skills</h2>
                        <Button text="k" />
                    </div>


                    <div className="flex gap-8">
                        <label className="flex flex-col gap-1 text-md">
                            Full Name:
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
                            Email:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Email"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-md">
                            Phone:
                            <Input
                                type="text"
                                className="border h-10 w-70"
                                placeholder="Phone"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="flex flex-col gap-1 text-md">
                            Address:
                            <Input
                                type="text"
                                className="border h-10 w-148"
                                placeholder="Full Name"
                            />
                        </label>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Skills;