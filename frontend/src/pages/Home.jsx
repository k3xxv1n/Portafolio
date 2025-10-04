import Navbar from "../components/Navbar"

import {Button, IconButton, Box} from "@mui/material"
import GitHubIcon from '../assets/github.png'
import IgIcon from '../assets/instagram.png'
import DcIcon from '../assets/discord.png'

import { Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="relative top-35">
                <h1 className="text-center text-4xl">Hi, I'm k3xxv1n<br/>Software developer</h1>
                <p className="text-center">My name is k3xxv1n (Kevin), this is my portafolio web</p>

                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <IconButton  href="https://github.com/k3xxv1n" target="_blank">
                        <img src={GitHubIcon} alt="GitHub" className="w-10 h-10 mx-auto mt-4" />
                    </IconButton>
                    <IconButton  href="https://www.instagram.com/k3nvhz.k3" target="_blank">
                        <img src={IgIcon} alt="instagram" className="w-10 h-10 mx-auto mt-4" />
                    </IconButton>
                    <IconButton href="https://discord.com/users/1013970911059255387" target="_blank">
                        <img src={DcIcon} alt="Discord" className="w-11 h-11 mx-auto mt-4" />
                    </IconButton>
                </Box>

                <div className="flex justify-center gap-4 relative top-5">
                    <Button component={Link} variant="contained" sx={
                        {
                            backgroundColor: '#DC2626',
                            transition: "all 0.3s ease-in-out",
                            '&:hover': {
                                backgroundColor: '#7F1D1D',
                                transform: "scale(1.10)"
                            },
                            color: '#D1D5DB'
                        }
                    } to='/Projects'>Projects</Button>


                    <Button component={Link} variant="contained" sx={{
                        backgroundColor: '#DC2626',
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                                backgroundColor: '#7F1D1D',
                                transform: "scale(1.10)"
                        },
                        color: '#D1D5DB'
                    }} to='/About'>About me</Button>
                </div>
            </div>

        </div>
    )
}

export default Home;