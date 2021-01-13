import { React, useContext, useEffect } from "react";
import { Jumbotron, Image } from "react-bootstrap"
import loggedOutImg from "../../src/assets/img/loggedOutImg.jpg"
import { useHistory } from 'react-router-dom'
const LoggedOutPage = () => {
    const history = useHistory();


    useEffect(() => {
        setTimeout(function () { history.replace("/signin") }, 3000);
    }, []);





    return (
        <div className="container ">
            <br></br>
            <Jumbotron>
                <h1 className="">You've succesfully logged out</h1>
                <p>
                    Thanks for visiting! We'll see you next time
  </p>
            </Jumbotron>
            <Image src={loggedOutImg}></Image>
        </div>
    );
};

export default LoggedOutPage;
