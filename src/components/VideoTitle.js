const VideoTitle = ({title, overview}) => {
    return (
        <div className="h-screen w-1/2 absolute text-white bg-gradient-to-r from-black flex items-center">
            <div className={"mx-24 my-auto"}>
                <h1 className={"text-5xl font-bold my-4"}>{title}</h1>
                <p className={"font-semibold text-lg"}>{overview}</p>
                <div className={"my-4"}>
                    <button className={"bg-white text-black rounded-lg w-32 text-lg font-semibold h-12 mr-4 hover:bg-gray-400"}>▶️ Play</button>
                    <button className={"bg-gray-400 text-black rounded-lg w-32 text-lg font-semibold h-12"}>More info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;