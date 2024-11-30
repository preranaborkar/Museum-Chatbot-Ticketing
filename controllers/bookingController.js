const TicketModel = require('../models/chatbotModel');
const User = require('../models/adminModel');
const Event = require('../models/eventModel');
const Admin=require('../models/adminModel');
// Render booking details page for admin
exports.getBookingDetails = async (req, res) => {
  try {
    // Assuming admin is logged in with a session
    if (!req.session.admin) {
      return res.redirect('/login'); // Redirect to login if no session
    }

    const adminId = req.session.admin.adminId;
    const admin = await Admin.getAdminById(adminId);
    
    if (!admin) {
      return res.status(404).send('Admin not found');
    }

    // Get all bookings
    const bookings = await TicketModel.Ticket.find().populate('userId').populate('eventId');
    
    res.render('admin/bookingDetails', { admin, bookings });
  } catch (error) {
    console.error('Error fetching booking details:', error);
    res.status(500).send('Internal Server Error');
  }
};
