import Footer from "../components/footer"
import MetaTags from "../components/meta-tags"

const Home = () => {

	return (

		<>
			<MetaTags
				title="How to NextJS"
				description="How to NextJS"
			/>
			<div className="container mx-auto py-5 px-5 md:px-0">
				<div className="text-2xl text-zinc-700 font-semibold">Why you should learn NextJS?</div>
				<div className="flex grid grid-col-1 md:grid-cols-3 gap-5 mt-5">
					<div>
						<blockquote className="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">wow. <a href="https://t.co/KTdaRyDizp">https://t.co/KTdaRyDizp</a> using <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a> <a href="https://t.co/mR3ns4Nvf2">pic.twitter.com/mR3ns4Nvf2</a></p>&mdash; Guillermo Rauch (@rauchg) <a href="https://twitter.com/rauchg/status/1594779272945627136?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>
					</div>
					<div>
						<blockquote className="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">The Verge: new version built with <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a>, <a href="https://twitter.com/vercel?ref_src=twsrc%5Etfw">@vercel</a>, and <a href="https://twitter.com/tailwindcss?ref_src=twsrc%5Etfw">@tailwindcss</a> 🔥<a href="https://t.co/FgZVHIS8Fb">https://t.co/FgZVHIS8Fb</a> <a href="https://t.co/PGWnzfGiEO">pic.twitter.com/PGWnzfGiEO</a></p>&mdash; Lee Robinson (@leeerob) <a href="https://twitter.com/leeerob/status/1569717140768555008?ref_src=twsrc%5Etfw">September 13, 2022</a></blockquote>
					</div>
					<div>
						<blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">I&#39;m curating a list of the most beautiful <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a> sites of all time:<br/><br/>◆ <a href="https://t.co/zI9NZtatP8">https://t.co/zI9NZtatP8</a><br/>◆ <a href="https://t.co/lrcH8haDO7">https://t.co/lrcH8haDO7</a><br/>◆ <a href="https://t.co/fqmO18ap5v">https://t.co/fqmO18ap5v</a><br/>◆ <a href="https://t.co/sZ3VgwJ8AL">https://t.co/sZ3VgwJ8AL</a><br/>◆ <a href="https://t.co/BZoyYb5NOd">https://t.co/BZoyYb5NOd</a><br/><br/>Who else did I miss? 👀 <a href="https://t.co/up5x23x32M">pic.twitter.com/up5x23x32M</a></p>&mdash; Steven Tey (@steventey) <a href="https://twitter.com/steventey/status/1591134103210176512?ref_src=twsrc%5Etfw">November 11, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
					</div>
				</div>
			</div>
			<Footer />
		</>

	)

}

export default Home
