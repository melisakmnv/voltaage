import { FC, useState } from "react"
import { Stack, Box, IconButton } from "@mui/material"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CarSlider.scss";

// import required modules
import { CarModal } from "./CarModal";
import { NextIcon, PreviousIcon } from "@components/icons";

interface CarSliderProps {
	vehicleTitle: string,
	albums: string[]
}

export const CarSlider: FC<CarSliderProps> = ({ vehicleTitle, albums, }) => {
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [photoIndex, setphotoIndex] = useState<number>(1)
	const [swiper, setSwiper] = useState<any>(null)

	const next = () => {
		swiper.slideNext()
	}

	const previous = () => {
		swiper.slidePrev()
	}

	const handleModal = (index: number) => {
		console.log(index)

		setOpenModal(prev => !prev)
	}


	return (
		<>
			<Stack direction={"row"} alignItems={"center"} justifyContent={"center"} px={2.5} py={1} sx={{ maxHeight: '250px' }}>
				<IconButton onClick={previous}>
					<PreviousIcon color={photoIndex === 1 ? "#595959" : "#FFF"} borderColor="#595959" />
				</IconButton>
				<Swiper
					simulateTouch={false}
					onSlideChange={(index) => {
						setphotoIndex(index.snapIndex + 1);
					}}
					onSwiper={(s) => {
						setSwiper(s);
					}}
					pagination={{
						type: 'progressbar',
					}}
					navigation={false}
					className="mySwiper"
				>
					{albums.map((_, index) => {
						return (
							<SwiperSlide key={index}>
								<Box sx={{ cursor: "pointer" }} onClick={() => handleModal(index)} component="img" alt={vehicleTitle} src={albums[index]} />
							</SwiperSlide>
						)
					})}
				</Swiper>

				<IconButton onClick={next}>
					<NextIcon color={photoIndex === albums.length ? "#595959" : "#FFF"} borderColor="#595959" />
				</IconButton>
				{openModal && <CarModal open={openModal} onOpen={setOpenModal} albums={albums} vehicleTitle={vehicleTitle} next={next} previous={previous} photoIndex={photoIndex} />}

			</Stack>
		</>
	)
}
