import Nav from "./Nav"
import Footer from "./Footer"
import Input from "../subcomponents/Input"
import TextArea from "../subcomponents/TextArea"
import Button from "../subcomponents/Button"

const PersonalDetails = () => {

    return (
        <>
            <Nav />
            <section className="min-h-screen flex flex-col justify-center items-center gap-12">
                <div className="flex justify-between items-center w-160">

                    <h2 className="text-3xl font-extralight">Personal Details</h2>

                    <div>
                        <Button
                            text="Next"
                            className="border text-lg w-20 p-1 pt-0.5 pb-0.5 rounded-xs cursor-pointer"
                        />
                    </div>
                </div>

                <form className="border flex flex-col items-center h-130 w-160 rounded-r-xs p-4 gap-2">
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

                    <div>
                        <label className="flex flex-col gap-1 text-md">
                            Summary:
                            <TextArea
                                className="border h-56 w-148 resize-none"
                                placeholder="Summary"
                            />
                        </label>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default PersonalDetails;