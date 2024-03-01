import { Box } from '@chakra-ui/react';
import { FiList, FiSettings } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';
import SidebarWithHeader from '~/components/SidebarWithHeader';

export default function App() {
	return (
		<SidebarWithHeader
			title="Settings"
			headBarItems={[
				{
					label: 'Sessions',
					icon: FiList,
					href: '/pages/index.html#',
				},
				{
					label: 'Settings',
					icon: FiSettings,
					href: '#',
				},
			]}
			sideBarItems={[]}
		>
			<Box p="10">
				<Routes>
					<Route path="/" element={<></>} />
				</Routes>
			</Box>
		</SidebarWithHeader>
	);
}
