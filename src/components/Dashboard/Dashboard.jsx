import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import WarningAlert from "../Alert/WarningAlert.jsx";
import NoAlert from "../Alert/NoAlert.jsx";

// must create a list of compromised users in database with list of bad websites to show--> schema: add "isCompromised" to user
// add new alert components
// render conditionally if user is compromised or not
// yellow alert for compromised user
// list of websites email was compromised
// p element
// 2 buttons: change password and dismiss
// onclick for dismiss: alert should switch to uncompromised (white) and read "No Alerts"
// no color and "No Alerts" for uncompromised user

// BONUS: add change password functionality
// BONUS: render the "No Alerts" alert once password changed and user signs back in.. "if password new..."


const Dashboard = () => {
    const user = useContext(AuthedUserContext);

    console.log("USER", user)
    // TODO: make sure user alerts are showing up in the data from the backend (you may need to update the backend)
    // TODO: Remove test alerts below and replace with user.alerts

    const alert = {
        alertType: "warning",
        alertMessages: ['warning message 1', 'warning message 2', 'warning message 3']
    }
    //   const alert = {
    //       alertType: "no alert",
    //       alertMessages: []
    //   }

// refactor the alert ternary to be handled in an alert component
// replace the ternary with the alert component
    const DashboardAlert = () => {
        if (alert.alertType === "warning") {
            return <WarningAlert alert={alert}/>
        } else {
            return <NoAlert />
        }
    }

    return (
        <main>
            <DashboardAlert />
            <h1>Welcome, {user.username}</h1>
            <p>
                This is the dashboard page where you, and only you, can see a dashboard
                of all of your things.
            </p>
        </main>
    );
};

export default Dashboard;
