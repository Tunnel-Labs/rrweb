import { FiList, FiSettings } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';
import SidebarWithHeader from '~/components/SidebarWithHeader';
import Player from './Player';
import { SessionList } from './SessionList';

export default function App() {
	return (
		<SidebarWithHeader
			title="Sessions"
			headBarItems={[
				{
					label: 'Settings',
					icon: FiSettings,
					href: '/options/index.html#',
				},
				{
					label: 'Sessions',
					icon: FiList,
					href: '#',
				},
			]}
			sideBarItems={[
				{
					label: 'List',
					icon: FiList,
					href: `#`,
				},
			]}
		>
			<Routes>
				<Route path="/" element={<SessionList />} />
				<Route path="session/:sessionId" element={<Player />} />
			</Routes>
		</SidebarWithHeader>
	);
}
