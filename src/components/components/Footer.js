import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container">
            <div className="flex flex-row justify-between bg-[#376AED] text-white">
                <div className="ml-40 mt-36 mb-36 text-xl">
                    <div className="mb-14">
                        <Link to={"#"}>
                            Why News Today
                        </Link>
                    </div>
                    <div className="mb-14">
                        <Link to={"#"}>
                            Be an author
                        </Link>
                    </div>
                    <div className="mb-14">
                        <Link to={"#"}>
                            Community
                        </Link>
                    </div>
                    <div>
                        <Link to={"#"}>
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="mr-40 mt-36 mb-36 text-right">
                    <div className="mb-9 text-4xl">
                        <Link to={"#"}>
                            News Today
                        </Link>
                    </div>
                    <div className="mb-6 text-lg">
                        <Link to={"#"}>
                            Jendral Sudirman Street No. 23 <br /> Jakarta, Indonesia
                        </Link>
                    </div>
                    <div className="mb-6 text-lg">
                        <Link to={"#"}>
                            (+62)888888888
                        </Link>
                    </div>
                    <div className="text-lg">
                        <Link to={"#"}>
                            newstoday@mail.com
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer