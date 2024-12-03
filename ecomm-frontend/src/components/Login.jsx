import axios from "axios";
import { useRef,useState } from "react";
import {useNavigate} from "react-router-dom";
const Login = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    
    const navigate = useNavigate();
    
    const login = async ()=>{
        const res = await axios.post(`http://localhost:9090/login`,{"username":ref1.current.value,"password":ref2.current.value});
        const {data} = res;
        const {login} = data;
        login == "success" ? navigate("/dashboard") : navigate("/error");
    }


    return(
        <>
            <fieldset>
                <legend>LOGIN FORM</legend>
                <input type="text" ref={ref1} placeholder="enter user name"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;