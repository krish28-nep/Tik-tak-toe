const RestartButton=()=>{
    return(
        <div className="restart-button">
            <button className="restart-button__button" onClick={()=>{
                window.location.reload();
            }}>Restart</button>
        </div>
    )

}
export default RestartButton