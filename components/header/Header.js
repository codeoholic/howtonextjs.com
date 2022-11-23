import Link from "next/link"

const Header = () => {

    return (

        <div className="bg-indigo-600 py-5">
            <div className="container mx-auto max-w-3xl">
                <Link passHref href="/">
                    <p className="text-white font-bold text-2xl">How to NextJS</p>
                </Link>
            </div>
        </div>

    )

}

export default Header
