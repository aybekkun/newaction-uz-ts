// @ts-nocheck
import CheckList from "@editorjs/checklist"
import Code from "@editorjs/code"
import Delimiter from "@editorjs/delimiter"
import EditorJS, { OutputBlockData } from "@editorjs/editorjs"
import Embed from "@editorjs/embed"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import List from "@editorjs/list"
import Marker from "@editorjs/marker"
import Quote from "@editorjs/quote"
import SimpleImage from "@editorjs/simple-image"
import Table from "@editorjs/table"
import Audio from "audio-editor-js"
import "audio-editor-js/main.css"
import YoutubeEmbed from "editorjs-youtube-embed"
import { useEffect, useRef } from "react"

import { $authHost } from "../../api/interceptors"

type EditerProps = {
  blocks?: any[] | []
  handleSaveData?: (blocks: OutputBlockData) => void
}

const Editer = ({ blocks = [], handleSaveData = (blocks: OutputBlockData) => undefined }: EditerProps) => {
  const editerRef = useRef(null)
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editer",
      tools: {
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "ctrlKey+v",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        code: Code,
        embed: Embed,
        table: Table,
        marker: Marker,
        list: List,
        image: {
          class: ImageTool,
          config: {
            additionalRequestHeaders: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            endpoints: {
              byFile: `${import.meta.env.VITE_APP_BASE_URL}/api/v1/upload`, // Your backend file uploader endpoint
              byUrl: `${import.meta.env.VITE_APP_BASE_URL}/storage`, // Your endpoint that provides uploading by Url
            },
          },
        },
        header: Header,
        checklist: CheckList,
        delimiter: Delimiter,
        simpleImage: SimpleImage,
        youtubeEmbed: YoutubeEmbed,
        audio: {
          class: Audio,
          config: {
            // token: `Bearer ${window.localStorage.getItem("token")}`,
            route: `${import.meta.env.VITE_APP_BASE_URL}/storage`,
            routeDelete: `${import.meta.env.VITE_APP_BASE_URL}/storage/files`,
            saveServer: async (file) => {
              try {
                let formData = new FormData()
                formData.append("audio", file)
                let req = await $authHost.post(`${import.meta.env.VITE_APP_BASE_URL}/api/v1/upload`, formData)

                return req.data
              } catch (e) {
                console.error(e)
              }
            },
          },
        },
      },
      data: {
        time: new Date(),
        blocks: [...blocks],
        version: "2.8.1",
      },
      async onChange() {
        const { blocks } = await editor.save()
        handleSaveData(blocks)
      },
    })
    editerRef.current = editor
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((e) => console.error("ERROR editor cleanup", e))
    }
  }, [])

  return (
    <div className="editer">
      <div id="editer"></div>
    </div>
  )
}

export default Editer
