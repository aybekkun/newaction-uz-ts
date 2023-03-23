// @ts-nocheck

import { FC } from "react"
import Output from "./Output"
type EditerParserProps = {
	blocks: any[]
}

const EditerParser: FC<EditerParserProps> = ({ blocks = [] }) => {
	if (blocks.length) {
		return blocks.map((output, i) => <Output key={i} block={output} />)
	}

	return <>empty</>
}

// const Output = ({ block }) => {
// 	switch (block.type) {
// 		case "header":
// 			return <h2>{block.data.text && parse(block.data.text)}</h2>
// 		case "paragraph":
// 			return <p>{block.data.text && parse(block.data.text)}</p>
// 		case "delimiter":
// 			return <hr />
// 		case "youtubeEmbed":
// 			return (
// 				<div className={styles.video}>
// 					{block.data?.url ? (
// 						<iframe
// 							width="100%"
// 							height="100%"
// 							src={getYouTubeEmbedUrl(block.data.url) || " "}
// 							title="YouTube video player"
// 							frameBorder="0"
// 							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 							allowFullScreen
// 						></iframe>
// 					) : (
// 						<h2>Video</h2>
// 					)}
// 				</div>
// 			)
// 		case "image":
// 			return <img src={`${block.data.file.url}`} alt="" loading="lazy" />
// 		case "simpleImage":
// 			return <img src={`${block.data.url}`} alt="" loading="lazy" />
// 		case "list":
// 			return (
// 				<ul>
// 					{block.data.items.map((item) => (
// 						<li>{parse(item)}</li>
// 					))}
// 				</ul>
// 			)
// 		case "checklist":
// 			return (
// 				// <div className="test">
// 				//   {block.data.items.map((item, i) => (
// 				//     <label key={i}>
// 				//       <input type="radio" name={block.id} />
// 				//       <span className="checkmark"></span>
// 				//       <span className="checkmark__text">{item.text}</span>
// 				//     </label>
// 				//   ))}
// 				// </div>
// 				<></>
// 			)
// 		case "table":
// 			return (
// 				<table border={1}>
// 					{block.data.content.map((tr, i) => (
// 						<tr key={i}>
// 							{tr.map((td, i) => (
// 								<td
// 									style={{
// 										minWidth: "100px",
// 										padding: "8px 15px",
// 										borderRadius: "2px",
// 										textAlign: "left",
// 									}}
// 									key={i}
// 								>
// 									{td ? parse(td) : ""}
// 								</td>
// 							))}
// 						</tr>
// 					))}
// 				</table>
// 			)
// 		case "quote":
// 			return <></>
// 		case "audio":
// 			return (
// 				<audio
// 					style={{ marginBottom: "20px" }}
// 					controlsList="nodownload"
// 					controls
// 					src={block.data.url}
// 				></audio>
// 			)
// 		default:
// 			console.log("Unknown block type", block.type)
// 			break
// 	}
// }


export default EditerParser
