import sanity from "../../sanity"

import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import format from "date-fns/format"

const Post = ( props ) => {

    const {

		description,
		title,
        body,
        image,
        publish_time,
        slug,

	} = props.post
    const builder = imageUrlBuilder({

		baseUrl: "https://cdn.sanity.io",
		projectId: props.project_id,
		dataset: "production",

	})
    const urlFor = (source) => builder.image(source)
	if( typeof image !== "undefined" )
		var image_seo = urlFor( image.asset._ref )
			.auto('format')
			.fit('max')
			.toString()
    else
        image_seo = ""

    return (

        <>
            <MetaTags
				title={ title }
				description={ description }
                image={ image_seo }
                slug={ slug.current }
			/>
            <Header/>
            <div className="container mx-auto max-w-3xl py-5 md:py-10 px-5 md:px-0">
                <h1 className="text-zinc-800 text-3xl font-semibold">{ title }</h1>
                <div className="text-base mt-2.5 text-zinc-600">
                    <p>{ format(new Date( publish_time ),"MMMM do, yyyy") }</p>
                </div>
                <div className="mt-5 text-zinc-700 text-lg">
                    <PortableText value={ body }/>
                </div>
            </div>
            <Footer />
        </>

    )

}

export const getServerSideProps = async ( context ) => {

	const slug = context.params.slug
	const post = await sanity.fetch(`*[slug.current == "${slug}"][0]`)
	if( post !== null )
		return {

			props: {
                
                post,
                project_id: "vwc4udx3"
            
            }


		}
	
	return {
		
		notFound: true
	
	}

}

export default Post
