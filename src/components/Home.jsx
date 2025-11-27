import Footer from "../components/Footer"
import Button from "../subcomponents/Button"

const Home = () => {

    return (
        <>
            <section className="border min-h-screen flex justify-center items-center">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-3xl tracking-wide">
                        Interactive Resume Builder
                    </h1>

                    <p classame="text-xl tracking-wider font-bold">
                        “Turn your experience into a polished resume.”
                    </p>

                    <div>
                        <Button
                            text="Try It Out"
                            className="border w-25 p-1 rounded-md cursor-pointer"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;