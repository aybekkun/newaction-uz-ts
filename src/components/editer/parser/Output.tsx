// @ts-nocheck
import parse from "html-react-parser"

import { getYouTubeEmbedUrl } from "../../../utils/regex/getYouTubeEmbedUrl"
import styles from "../Editer.module.scss"

import Hide from "./Hide"
import Test from "./Test"

const Output = ({ block }) => {
  switch (block.type) {
    case "header":
      return <h2>{block.data.text && parse(block.data.text)}</h2>
    case "paragraph":
      return <p>{block.data.text && parse(block.data.text)}</p>
    case "delimiter":
      return <hr />
    case "youtubeEmbed":
      return (
        <div className={styles.video}>
          {block.data?.url ? (
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(block.data.url) || " "}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <h2>No video :(</h2>
          )}
        </div>
      )
    case "image":
      return <img src={`${block.data.file.url}`} alt="" loading="lazy" />
    case "simpleImage":
      return <img src={`${block.data.url}`} alt="" loading="lazy" />
    case "list":
      return (
        <ul>
          {block.data.items.map((item) => (
            <li>{parse(item)}</li>
          ))}
        </ul>
      )
    case "checklist":
      return <Test isInner={true} blocks={[block]} />
    case "table":
      return (
        <div style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table border={1}>
            <tbody>
              {block.data.content.map((tr, i) => (
                <tr key={i}>
                  {tr.map((td, i) => (
                    <td
                      style={{
                        minWidth: "100px",
                        padding: "8px 15px",
                        borderRadius: "2px",
                        textAlign: "left",
                      }}
                      key={i}
                    >
                      {td ? parse(td) : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "quote":
      return <Hide block={block} />
    case "audio":
      return <audio style={{ marginBottom: "20px" }} controlsList="nodownload" controls src={block.data.url}></audio>
    default:
      console.log("Unknown block type", block.type)
      break
  }
}

export default Output
