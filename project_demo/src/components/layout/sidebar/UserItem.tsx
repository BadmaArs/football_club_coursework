import { FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material"

const UserItems: FC = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Link to={'/profile'}>
                <Box sx={{position: 'relative', marginRight: 5}}>
                    <img src="https://thumbs.dreamstime.com/z/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="" />
                    <Box sx={{
                        backgroundColor: 'green',
                        width: 4,
                        height: 4,
                        position: 'absolute',
                        bottom: 2,
                        left: 2
                    }}></Box>
                </Box>
            <span>Джмитрий Лижин</span>
            </Link>
        </Box>
    )
}
export default UserItems