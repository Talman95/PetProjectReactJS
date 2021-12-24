import { useState } from "react";
import classes from './ProfileStatus.module.css';


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const changeStatus = (e) => {
        setStatus(e.target.value);
    }
    const updateStatus = () => {
        setEditMode(false);
    }

    return (
        <>
            {!editMode &&
                <div className={classes.status}>
                    <small onClick={() => { setEditMode(true) }}>{status}</small>
                </div>}
            {editMode &&
                <div className={classes.status}>
                    <input autoFocus={true} onChange={changeStatus} onBlur={updateStatus} value={status} />
                </div>
            }
        </>
    )
}

export default ProfileStatus;