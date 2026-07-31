import {Link} from "react-router-dom";
import "../../App.css";

const WarningAlert = ({alert}) => {
    // for each alert message make an li and render the messages
    // make alert container yellow
    // add two buttons
    return (
        <main className={"warning-alert"}>
            <h1>
                Warning Alert
            </h1>
            <p>
                Your email was involved in a breach in the following sites:
            </p>
            <ul>
                {alert.alertMessages.map((message, index) => (
                <li key={index}>{message}</li>
                ))}
            </ul>
            <p>
                We recommend you change your password
            </p>
            <div>
                <Link to="/signin">
                    <button>Reset Password</button>
                </Link>
                <button>Dismiss</button>
            </div>
        </main>
    );
};

export default WarningAlert;