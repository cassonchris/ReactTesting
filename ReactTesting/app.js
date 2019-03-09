"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var useState = React.useState;
var Button = function () {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    var handleClick = function () { return setCounter(counter + 1); };
    return (React.createElement("button", { onClick: handleClick }, counter));
};
var ValidateTicketButton = function () {
    var _a = useState("Not yet"), submit = _a[0], setSubmit = _a[1];
    var handleClick = function () {
        fetch("http://localhost:7071/api/ValidateTicket/eventHash/ticket")
            .then(function (response) { return response.json(); })
            .then(function () { return setSubmit("Yahuh"); });
    };
    return (React.createElement("button", { onClick: handleClick },
        "Ticket Validated? ",
        submit));
};
ReactDOM.render(React.createElement("div", null,
    React.createElement(Button, null),
    React.createElement(ValidateTicketButton, null)), document.getElementById("root"));
//# sourceMappingURL=app.js.map