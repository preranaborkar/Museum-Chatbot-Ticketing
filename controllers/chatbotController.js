const Event= require('../models/eventModel');
const chatbotModel=require('../models/chtabotModel');

let userSessionData = {};

exports.bookTicket = async (req, res) => {
    const intent = req.body.queryResult?.intent?.displayName; 
    const parameters = req.body.queryResult?.parameters;
    console.log("Received Intent: ", intent);
    try {
   switch(intent){
    case 'Provide Date':
            userSessionData.bookingDate = parameters.date;
            console.log("Stored Date:", userSessionData.bookingDate);
            break;

    case 'Provide Showname':
            userSessionData.eventName = parameters.showname;
            console.log("Stored Show Name:", userSessionData.eventName);
            break;

     case 'Provide NoOfTickets':
            userSessionData.quantity = parameters.noOfTicket;
            console.log("Stored No. of Tickets:", userSessionData.quantity);
            break;

    case 'Provide Name':
            userSessionData.name = parameters.name;
            console.log("Stored Name:", userSessionData.name);
            break;

    case 'Provide Email':
            userSessionData.email = parameters.email;
            console.log("Stored Email:", userSessionData.email);
            break;

    case 'Provide VisitorType':
            userSessionData.visitorType = parameters.visitorType;
            console.log("Stored Visitor Type:", userSessionData.visitorType);
            break;
    case 'Provide OTP':
        const providedOTP = parameters?.otp; // Safely access the OTP parameter
        console.log("Received OTP:", providedOTP); 

             // Simulate OTP verification logic
             if (providedOTP?.toString().trim()  === '123456') { // Replace with actual OTP logic
                 console.log("OTP verified successfully.");

                    // Print session data to verify it's being stored
                 console.log("Session Data Stored:", userSessionData);

                    // Clear session data after printing (optional, depends on requirements)
                 userSessionData = {};
             } else {
                    console.log("Invalid OTP provided.");
             }
    break;
    
    default:
        console.log("No matching intent found.");
             break;
    
   }
   // Send an empty response back to Dialogflow
   res.sendStatus(200);
}catch (error) {
    console.error("Error handling intent:", error);
    res.sendStatus(500);
}
};
