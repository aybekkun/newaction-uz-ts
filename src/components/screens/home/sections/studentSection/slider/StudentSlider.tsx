import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import "./Slider.scss"
import avatarImg from "./avatar.jpg"
import P from "../../../../../ui/heading/P"

const sliderData = [
	{
		name: "Johnny Dape",
		description:
			"Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim eget ullamcorper risus.",
		src: avatarImg,
		job: "CEO",
	},
	{
		name: "Johnny Dape",
		description:
			"Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim eget ullamcorper risus.",
		src: avatarImg,
		job: "CEO",
	},
	{
		name: "Johnny Dape",
		description:
			"Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim eget ullamcorper risus.",
		src: avatarImg,
		job: "CEO",
	},
]
const StundetSlider: FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		adaptiveHeight: true,
		prevArrow: false,
		nextArrow: false,
	}
	return (
		<div className="swiper mySwiper">
			<div className="swiper-wrapper">
				{/* @ts-ignore */}
				<Slider {...settings}>
					{sliderData.map((item, i) => (
						<SliderItem key={i} {...item} />
					))}
				</Slider>
			</div>
		</div>
	)
}

type SliderItemProps = {
	name: string
	description: string
	src: string
	job: string
}

const SliderItem: FC<SliderItemProps> = ({ name, description, src, job }) => {
	return (
		<div className="swiper-slide">
			<P className="swiper-desc textF">{description}</P>
			<div className="avatar">
				<img src={src} alt="avatar" />
				<div className="avatar__desc-box">
					<h4>{name}</h4>
					<span>{job}</span>
				</div>
			</div>
		</div>
	)
}

export default StundetSlider
