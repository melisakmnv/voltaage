import { FC, useEffect, useState } from 'react';
import { Checkbox, Typography, Stack, IconButton, FormControl } from '@mui/material';
import { AddIcon, CheckIcon, InfoIcon } from '../../icons';
import { InfoModal } from '../Modal/InfoModal';

interface ServiceItemProps {
	service: {
		id: number;
		image: string;
		serviceTitle: string;
		description: string;
		prevalidated: boolean;
	};
}

export const ServiceItem: FC<ServiceItemProps> = ({ service }) => {
	const [checkedService, setCheckedService] = useState(service);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleModal = () => setOpenModal((prev) => !prev);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setCheckedService({ ...checkedService, prevalidated: event.target.checked });

	return (
		<Stack>
			<Stack
				direction={'row'}
				justifyContent={'space-between'}
				alignItems={'center'}
				border={1}
				borderRadius={2}
				borderColor={checkedService.prevalidated ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)'}
				p={'5px 1rem'}
				sx={{
					backgroundImage: checkedService.prevalidated ? 'linear-gradient(135deg, #17EAD9 0%, #6176F4 100%)' : 'none',
					fontWeight: checkedService.prevalidated ? 600 : 400,
				}}
			>
				<Stack direction={'row'} alignItems={'center'} gap={1.25}>
					<Typography
						fontSize={'12px'}
						lineHeight={'14px'}
						letterSpacing={'0.01em'}
						sx={{ textShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)' }}
					>
						{service.serviceTitle}
					</Typography>
					<IconButton onClick={handleModal}>
						<InfoIcon size={10} color="white" />
					</IconButton>
				</Stack>
				<FormControl>
					<Checkbox
						name={service.serviceTitle}
						icon={<AddIcon />}
						checkedIcon={<CheckIcon />}
						checked={checkedService.prevalidated}
						onChange={handleChange}
					/>
				</FormControl>
			</Stack>
			{openModal && <InfoModal id={service.id} service={service} open={openModal} onOpen={setOpenModal} />}
		</Stack>
	);
};
