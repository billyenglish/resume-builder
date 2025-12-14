import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button"
import TextArea from "../subcomponents/TextArea";

const Certifications = () => {

    return (
        <>
            <Nav />
            <section className="min-h-screen flex flex-col justify-center items-center gap-12">
                <div className="flex justify-between items-center w-160">

                    <h2 className="text-3xl font-extralight">Certifications, Skills, Interest</h2>

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

                <form className="border flex flex-col items-center h-132 w-160 rounded-r-xs p-2 gap-2">
                    <div>
                        <label className="flex flex-col gap-1 text-md">
                            Certifications:
                            <TextArea
                                className="border h-33 w-148 resize-none"
                                placeholder="Summary"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="flex flex-col gap-1 text-md">
                            Skills:
                            <TextArea
                                className="border h-33 w-148 resize-none"
                                placeholder="Summary"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="flex flex-col gap-1 text-md">
                            Interest:
                            <TextArea
                                className="border h-33 w-148 resize-none"
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

export default Certifications;