import { useEffect, useState } from "react";
import { Button } from "./components/Button.style";
import HomeCSS from "./home.module.css"
function Home() {
    const [name, setName] = useState("ahmed");
    const [age, setAge] = useState(20);
    const [username, setUsername] = useState()
    const [password, setPassword] = useState();
    const [isFemale, setFemale] = useState("true");

    // const handleClick=()=>{
    //     setAge(30);
    //     console.log(age);

    // }
    const handleClick = () => {
        setFemale(false);
        console.log(isFemale);

    }

    useEffect(() => {
        console.log("use effect called");
        
    },[password,username])

    return (<div className="card">
        <div>
            <input type="text" placeholder="Username"
                onChange={(e) => {
                    console.log(e.target.value)
                    setUsername(e.target.value)
                }}

            /><br />

            <input type="text" placeholder="Password"
                onInput={(e) => setPassword(e.target.value)}

            /><br />
            {/* <button>Submit</button> */}



        </div>

        <div>
            <h1>Username {username}</h1>
            <h1>Password {password}</h1>
        </div>
        {/* <h1>{isFemale}</h1>
        <button className={HomeCSS.btn}  onClick={handleClick}>Click me</button> */}
        {/* <Button backgroundColor="cyan">Styled component</Button>
        <Button backgroundColor="black">Styled component 2</Button> */}
    </div>);
}


export default Home;