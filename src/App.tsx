import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { useService } from '@hooks';
import { CustomThemeProvider, history, StoreProvider, TranslationProvider } from '@utils';
import { notificationService } from '@services';
import { AppRoutes, LoadingSpinnerOverlay, Notification } from '@components/common';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const App: FC = () => {
	const { data: notification } = useService(notificationService.getSubject);
	return (
		<HistoryRouter history={history}>
			<StoreProvider>
				<CustomThemeProvider>
					<TranslationProvider>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<Notification
								open={!!notification}
								onClose={() => notificationService.clear()}
								alertProps={{ variant: 'outlined' }}
								{...notification}
							/>
							<LoadingSpinnerOverlay />
							<AppRoutes />
						</LocalizationProvider>
					</TranslationProvider>
				</CustomThemeProvider>
			</StoreProvider>
		</HistoryRouter>
	);
};
