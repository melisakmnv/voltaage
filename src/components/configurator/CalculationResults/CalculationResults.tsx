import { FC, ReactNode } from 'react';
import { ICalculationResult } from '@models';
import { Avatar, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { CalculationResultItem } from '../CalculationResultItem';
import { ConfiguratorCard } from '../ConfiguratorCard';
import { RoadIcon, TreeIcon } from '@components/icons';

const Row: FC<{ left?: ReactNode; right?: ReactNode }> = ({ left, right }) => {
	return (
		<Grid container sx={{ paddingY: 2 }} columnSpacing={5}>
			<Grid item xs={6}>
				{left}
			</Grid>
			<Grid item xs={6}>
				{right}
			</Grid>
		</Grid>
	);
};

const numberFormat = (number: number, opts?: Intl.NumberFormatOptions): string => {
	return new Intl.NumberFormat('it', opts).format(number);
};

interface ICalculationResultsProps {
	results: ICalculationResult;
}

export const CalculationResults: FC<ICalculationResultsProps> = ({ results: { kmPercorsi, euro, co2Total, treeNeededTocompensate } }) => {
	return (
		<Grid container direction="column" rowSpacing={4}>
			<Grid item>
				<ConfiguratorCard bgColor="colored" disablePaddingX>
					<Grid container direction="column" flexGrow={1}>
						<Grid item>
							<Stack direction="column" sx={{ marginTop: 1.5, marginBottom: 2.25 }}>
								<Stack direction="column" justifyContent="center" spacing={0}>
									<Typography variant="h5" sx={{ fontWeight: 500, lineHeight: '1.6', textAlign: 'center' }}>
										Puoi risparmiare fino a
									</Typography>
									<Stack direction="row" justifyContent="center" alignItems="baseline" spacing={0.5}>
										<Typography variant="body1" sx={{ fontSize: 40, fontWeight: 600, lineHeight: 'normal' }}>
											{numberFormat(euro, { maximumFractionDigits: 0 })}
										</Typography>
										<Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 'normal' }}>
											€/ 4 anni
										</Typography>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
						<Grid item flexGrow={1} sx={{ position: 'relative' }}>
							<Box
								sx={{
									position: 'absolute',
									inset: 0,
									opacity: 0.16,
									borderBottomLeftRadius: 4,
									borderBottomRightRadius: 4,
									backgroundColor: 'grey.300',
								}}
							/>
							<Stack direction="column" sx={{ paddingX: 3 }}>
								<Row
									left={
										<CalculationResultItem
											icon={
												<Avatar sx={{ backgroundColor: 'common.black', width: 36, height: 36 }}>
													<TreeIcon />
												</Avatar>
											}
											value={numberFormat(treeNeededTocompensate)}
											description="trees needed to offset co2 emissions/ in 4 anni"
											spacing={1}
										/>
									}
									right={
										<CalculationResultItem
											icon={
												<Avatar sx={{ backgroundColor: 'common.black', width: 36, height: 36 }}>
													<RoadIcon />
												</Avatar>
											}
											value={numberFormat(kmPercorsi, { maximumFractionDigits: 0 })}
											description="Km totali /in 4 anni"
											spacing={1}
										/>
									}
								/>
							</Stack>
						</Grid>
					</Grid>
				</ConfiguratorCard>
			</Grid>
			<Grid item>
				<ConfiguratorCard sx={{ padding: 1 }}>
					<Stack direction="column" divider={<Divider />}>
						<Row
							left={
								<CalculationResultItem
									value={numberFormat(co2Total / 4, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
									description="tCO2/all'anno"
								/>
							}
							right={
								<CalculationResultItem
									value={numberFormat(co2Total / (4 * 12), { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
									description="tCO2/al mese"
								/>
							}
						/>
						<Row
							left={
								<CalculationResultItem
									value={numberFormat(euro / 4, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
									description="€/ all'anno"
								/>
							}
							right={
								<CalculationResultItem
									value={numberFormat(euro / (4 * 12), { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
									description="€/al mese"
								/>
							}
						/>
						<Row
							left={
								<CalculationResultItem
									value={numberFormat(kmPercorsi / 4, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
									description="km totali/all'anno"
								/>
							}
							right={
								<CalculationResultItem
									value={numberFormat(kmPercorsi / (4 * 12), { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
									description="km totali/al mese"
								/>
							}
						/>
					</Stack>
				</ConfiguratorCard>
			</Grid>
		</Grid>
	);
};
