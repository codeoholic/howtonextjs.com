import Link from "next/link"

const { version } = require("../../package.json")

// ICONSET USED
// https://www.iconfinder.com/search/icons?family=unicons-line

const Footer = () => {

    return (

        <div className="container max-w-4xl mx-auto py-5">
            <div className="flex gap-5 justify-center items-center">
                <div className="h-8 w-8 relative">
                    <Link href="https://twitter.com/howtonextjs" passHref target="_blank">
                        <img src="/twitter.svg" alt="twitter_icon"/>
                    </Link>
                </div>
                <div className="h-8 w-8 relative">
                    <Link href="https://t.me/howtonextjs" passHref target="_blank">
                        <img src="/telegram.svg" alt="telegram_icon"/>
                    </Link>
                </div>
                <div className="h-8 w-8 relative">
                    <Link href="https://github.com/codeoholic/howtonextjs.com" passHref target="_blank">
                        <img src="/github.svg" alt="telegram_icon"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
                <p className="text-xs text-slate-500">v{ version }</p>
                <div className="mt-1">
                    <p className="text-[8px] text-slate-500 uppercase">in technology we trust</p>
                </div>
            </div>
        </div>

    )

}

export default Footer
