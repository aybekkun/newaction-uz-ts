// @ts-nocheck
import CheckList from "@editorjs/checklist"
import Code from "@editorjs/code"
import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import InlineCode from "@editorjs/inline-code"
import LinkTool from "@editorjs/link"
import List from "@editorjs/list"
import Marker from "@editorjs/marker"
import Quote from "@editorjs/quote"
import Raw from "@editorjs/raw"
import SimpleImage from "@editorjs/simple-image"
import Table from "@editorjs/table"
import Audio from "audio-editor-js"
import YoutubeEmbed from "editorjs-youtube-embed"
import { $authHost } from "../../api/interceptors"

export const EDITER_JS_TOOLS = {
	quote: {
		class: Quote,
		inlineToolbar: true,
		shortcut: "ctrlKey+v",
		config: {
			quotePlaceholder: "Enter a quote",
			captionPlaceholder: "Quote's author",
		},
	},
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
				byUrl: `${import.meta.env.VITE_APP_BASE_URL}/public/storage`, // Your endpoint that provides uploading by Url
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
			route: `${import.meta.env.VITE_APP_BASE_URL}/public/storage`,
			routeDelete: `${import.meta.env.VITE_APP_BASE_URL}/public/storage/files`,
			saveServer: async (file) => {
				try {
					let formData = new FormData()
					formData.append("audio", file)
					let req = await $authHost.post(
						`${import.meta.env.VITE_APP_BASE_URL}/api/v1/upload`,
						formData
					)

					return req.data
				} catch (e) {
					console.error(e)
				}
			},
		},
	},
}
