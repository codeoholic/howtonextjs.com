const { version } = require("../../package.json")

const Footer = () => {

    return (

        <div className="container max-w-4xl mx-auto py-5">
            <div className="flex flex-col items-center justify-center">
                <p className="text-xs text-slate-500">v{ version }</p>
                <div className="mt-1">
                    <p className="text-[8px] text-slate-500 uppercase">in technology we trust</p>
                </div>
            </div>
        </div>

    )

}

export default Footer
