
export function getYouTubeEmbedUrl(url: string) {
	const regex =
		/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/
	const match = url.match(regex)
	if (match) {
		const videoId = match[5]
		return `https://youtube.com/embed/${videoId}`
	}
	return null
}
