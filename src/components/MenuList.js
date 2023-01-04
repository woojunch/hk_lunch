const MenuList = (props) => {

    const lunchList = props.items;

    const lunchListItems = (
        <ul>
            {lunchList.map((value, key) => 
                <li key={key}>{value.name}</li>
            )}
        </ul>
    );

    return (
        <ul>
            {lunchListItems}
        </ul>
    );
}

export default MenuList;