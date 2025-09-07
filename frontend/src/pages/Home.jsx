import Navbar from "../components/Navbar"

import Button from "@mui/material/Button"

import { Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="relative top-35">
                <h1 className="text-center text-4xl">Welcome to me portfolio</h1>
                <p className="text-center">My name is k3xxv1n (Kevin), this is my portafolio web</p>
                <div className="flex justify-center gap-4 relative top-5">
                    <Button component={Link} variant="outlined" sx={
                        {
                            borderColor: 'black',
                            color: 'black'
                        }
                    } to='/Projects'>Projects</Button>


                    <Button component={Link} variant="outlined" sx={{
                        borderColor: 'black',
                        color: 'black'
                    }} to='/About'>About me</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;