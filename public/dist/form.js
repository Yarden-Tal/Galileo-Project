console.log("***The errors are caused by the Youtube embed for some reason. After a lot of effort I decided to skip solving these and leave the iframe as is!***");
//Select the locations to insert the data collected at the Homepage:
var date = document.querySelector("#date").getAttribute("value");
var expedition = document.querySelector("#expedition");
//Insert the data from the Homepage:
var chosenDate = localStorage.getItem("date");
var chosenExpedition = localStorage.getItem("expedition");
document.querySelector("#date").setAttribute("value", chosenDate);
var selectExpedition = function () {
    try {
        if (chosenExpedition === "Mars Expedition") {
            expedition[0].selected = "selected";
        }
        else if (chosenExpedition === "Venus Expedition") {
            expedition[1].selected = "selected";
        }
        else if (chosenExpedition === "Moon Expedition") {
            expedition[2].selected = "selected";
        }
    }
    catch (error) {
        console.error(error);
    }
};
selectExpedition();
//The user class for the expedition form:
var Participant = /** @class */ (function () {
    function Participant(name, date, planet, isCertified) {
        this.name = name;
        this.date = date;
        this.planet = planet;
        this.isCertified = isCertified;
    }
    return Participant;
}());
//An array listing the participants booked:
var participants = [];
//Handle submit event for the form:
var handleSubmit = function (e) {
    try {
        e.preventDefault();
        //prepare the input as paramaters for the Participant Class:
        var name = e.target.elements.name.value;
        var date_1 = e.target.elements.date.value;
        var expedition_1 = e.target.elements.expedition.value;
        var isCertified = e.target.elements.isCertified.checked;
        //Add participant to the participants array:
        participants.push(new Participant(name, date_1, expedition_1, isCertified));
        alert("Thank you for your booking!\nYour details:\n" + name + ", " + (isCertified ? "certified Astronaut." : "uncertified.") + "\n" + expedition_1 + ", " + date_1 + ".");
        window.location.replace("/public/index.html");
    }
    catch (er) {
        console.error(er);
    }
};
