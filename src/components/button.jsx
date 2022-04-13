const MyButton = ({
    buttonName,buttonClick
}) => {
    return (
        <button onClick={buttonClick}>{buttonName}</button>
    )
}


export default MyButton