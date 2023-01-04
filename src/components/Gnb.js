import './../css/App.css';

const Gnb = (props) => {

    const clickHandler = (e) => {
        props.showModule(e.target.value)
    }
    
    return (
        <div>
            <ul>
                <li onClick={clickHandler} value="1">메뉴등록</li>
                <li onClick={clickHandler} value="2">메뉴리스트</li>
                <li onClick={clickHandler} value="3">점심등록</li>
            </ul>
        </div>
    );
}

export default Gnb;