import React, {useState} from "react";
import {omit} from "lodash";
import {useNavigate} from "react-router-dom";

const Login = ()=>{
    const [inputs,setInputs] = useState({});
    const [errors,setErros] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        const {username,password} = inputs;
        username != undefined && password != undefined ? navigate("/home") : alert("Login Fail")
        console.log(inputs);
    }

    const validate = (event,name,value)=>{
        switch(name){
            case "username":
                if(/^$/.test(value)){
                    setErros({...errors,"username":"can't left blank"})
                }else if(!/^[A-Z]\w{3,20}$/.test(value)){
                    setErros({...errors,"username":"must follow pattern"})
                }else{
                    let delObj = omit(errors,"username");
                    setErros(delObj);
                }
                break;
            case "password":
                if(/^$/.test(value)){
                    setErros({...errors,"password":"password can't be empty"});
                }else if(!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/.test(value)){
                    setErros({...errors,"password":"must follow standards"})
                }else{
                    let delObj1 = omit(errors,"password");
                    setErros(delObj1);
                }
        }
    }
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        validate(event,name,value);
    

        setInputs({...inputs,[name]:value});
    }
    return(
        <React.Fragment>
        <div className="tab">
            <center>
            <h1>&nbsp;</h1>
            <div><h1 style={{color:"red"}}><u><i>Sai Movies</i></u></h1></div>
            <h1>&nbsp;</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <table className="login" 
                   align={"center"}>
                    <tr>
                        <td><label>User Name</label></td>
                        <td><input type="text" name="username" value={inputs.username || ""} onChange={handleChange}></input></td>
                        <td><h3 style={{color:"red"}}>{errors.username}</h3></td>
                    </tr>
                    <h1>&nbsp;</h1>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" name="password" value={inputs.password} onChange={handleChange}></input></td>
                        <td><h3 style={{color:"red"}}>{errors.password}</h3></td>
                    </tr>
                    <h1>&nbsp;</h1>
                    <tr>
                        <td></td>
                        <td><center><input type="submit" value="Login"></input></center></td>
                        
                    </tr>
                </table>
           </form>
            </div>
            </center>
        </div>
        </React.Fragment>
    )



}

//export Component
export default Login;
