const MenuRegister = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        
        const formData = {
            "lunch_name" : event.target.lunch_name
            , "date" : event.target.lunch_date
        };

        props.addLunchMenu(formData);
    }

    return (
        <div>
            <form name="form" onSubmit={submitHandler}>
                <input type="text" name="lunch_name" />
                <input type="date" name="lunch_date" />
                <input type="submit" value="등록" />
            </form>
        </div>
    );
}

export default MenuRegister;