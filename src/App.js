import React, { useState } from 'react'; 
import MenuRegister from './components/MenuRegister';
import MenuList from './components/MenuList';
import Gnb from './components/Gnb';
import LunchHistoryRegister from './components/LunchHistoryRegister';

const App = () => {

	const DUMMY_DATA = [
		{ 
			name : '불고기',
			category : '한식',
			price : 10000,
			date : '20230101',
		},
		{ 
			name : '짜장면',
			category : '중식',
			price : 7000,
			date : '20230102',
		},
		{ 
			name : '김치찌개',
			category : '한식',
			price : 9000,
			date : '20230103',
		},
		{ 
			name : '피자',
			category : '양식',
			price : 12000,
			date : '20230104',
		},
	];

	// 점심메뉴 리스트
	const [ lunchMenus, setLunchMenus ] = useState(DUMMY_DATA);

	const onAddLunchMenuHandler = (lunchMenu) => {
		setLunchMenus((prevState) => {
			return [ ...prevState, lunchMenu ]
		});
	};

	const [ showModuleNo, setShowModuleNo ] = useState(0);

	// 특정 모듈 노출 제어
	const onShowModule = (no) => {
		setShowModuleNo(no)
	}

	return (
		<div className="App">
			<Gnb showModule={onShowModule}></Gnb>
			{showModuleNo === 1 && <MenuRegister addLunchMenu={onAddLunchMenuHandler} />}
			{showModuleNo === 2 && <MenuList items={lunchMenus} />}
			{showModuleNo === 3 && <LunchHistoryRegister items={lunchMenus} />}
		</div>
	);
}

export default App;
