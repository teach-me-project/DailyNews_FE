import Avatar from "../images/Hans.jpg"

const Comment = () => {
    return (
        <>
            <div className="mx-72 mb-28">
                <h1>Comments</h1>
                <div className="flex flex-row justify-start mt-11">
                    <div className="avatar mr-36 flex flex-row">
                        <div className="w-12 rounded-md border-black ring-black ring-offset-base-100 ring-offset-2">
                            <img src={Avatar} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-blue">
                                Hans 3m ago
                            </h1>
                            <p>

                            </p>
                        </div>
                    </div>
                    <button className="">
                        submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Comment