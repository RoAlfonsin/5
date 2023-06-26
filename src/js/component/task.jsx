import React from "react";

function Task(props){
    const description = props.description;

    function showButton(){
        document.getElementById(description).style.visibility = "visible";
    }

    function hideButton(){
        document.getElementById(description).style.visibility = "hidden";
    }

    return(
        <div className="row border" onMouseOver={showButton} onMouseLeave={hideButton}>
            <div className="col-9">
                <p className="text-start fs-2 m-0 p-2">{description}</p>
            </div>
            <div className="col-3 d-flex justify-content-end p-2">
                <button type="button" class="btn btn-danger" id={description} style={{visibility: "hidden"}}>X</button>
            </div>

        </div>
    );
}

export default Task;