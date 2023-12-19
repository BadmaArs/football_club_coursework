import { FC, ReactNode } from "react"
import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import { Grid } from "@mui/material"

const Layout: FC <{children: ReactNode}> = ({children}) => {
    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item md={2} >
                    <Sidebar />
                </Grid>
                <Grid item md={9}>
                    {children}
                </Grid>
            </Grid>
            <div>
                
               
            </div>
        </>
    )
}
export default Layout