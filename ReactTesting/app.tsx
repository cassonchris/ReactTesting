import React = require("react");
import ReactDOM = require("react-dom");
const { useState } = React;

const Button = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

const ValidateTicketButton = () => {
    const [submit, setSubmit] = useState("Not yet");
    const handleClick = () => {
        fetch("http://localhost:7071/api/ValidateTicket/eventHash/ticket")
            .then(() => setSubmit("Yahuh"));
    }
    return (
        <button onClick={handleClick}>
            Ticket Validated? {submit}
        </button>
    );
}

ReactDOM.render(
    <div>
        <Button />
        <ValidateTicketButton />
    </div>,
    document.getElementById("root")
);