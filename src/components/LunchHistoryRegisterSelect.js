const LunchHistoryRegisterSelect = (props) => {
    const lunchMenus = props.items;

    const clickOneDepth = (e) => {
        
    }
    return (
        <div>
        {lunchMenus.map((value, key) =>
            <div onClick={clickOneDepth} key={key} value={value}>{value.name}</div>
        )}
        </div>
    )
}

export default LunchHistoryRegisterSelect;