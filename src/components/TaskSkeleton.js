import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

import '../styles/TaskSkeleton.css'

export default function TaskSkeleton() {
    return (
        <div className="taskSkeleton_container">
            <div className="taskSkeleton_text">
                <Skeleton variant="text" animation="wave" width="80%" />
                <Skeleton variant="text" animation="wave" width="50%" />
                <Skeleton variant="text" animation="wave" width="65%" />
            </div>
            <Skeleton variant="circle" width={20} height={20} />

            {
                // <Skeleton animation="wave" />
                // <Skeleton variant="circle" width={40} height={40} />
                // <Skeleton variant="rect" width={210} height={118} />
            }
        </div>
    )
}
