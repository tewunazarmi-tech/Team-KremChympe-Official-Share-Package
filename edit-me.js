// #####################################################################
// #                                                                   #
// #   EDIT-ME.js  —  THIS IS THE ONLY FILE YOU EVER NEED TO OPEN      #
// #                                                                   #
// #####################################################################
//
// Everything a visitor sees on your booking page lives in THIS file,
// in the SAME ORDER it appears on the page — top of the page first,
// bottom of the page last. Scroll down and you're scrolling down the
// website.
//
// HOW TO EDIT ANYTHING:
//   1. Find the line below that matches what you see on the website.
//   2. Type your new text or number BETWEEN THE QUOTE MARKS " ".
//      (Numbers don't need quote marks — just type the new number.)
//   3. Do NOT delete the quote marks " ", the commas , or the curly
//      brackets { }. Everything else is safe to change.
//   4. Save the file, then upload it to GitHub (replacing the old
//      version). That's it — the live website updates automatically.
//
// index.html and any other files in this project are the "engine" —
// you never need to open them. This file is the only steering wheel.
//
// #####################################################################



// #####################################################################
// # SECTION 1 — YOUR BUSINESS                                        #
// #####################################################################

// The name of your tour/business. Shows in the page title, the big
// heading at the top ("Book ___"), and inside the package box.
const BUSINESS_NAME = "Your Kremchympe Adventures";

// The WhatsApp number bookings get sent to when a visitor submits the
// form. Country code + number, NO plus sign, NO spaces, NO dashes.
// Example for India: 91 then the 10-digit number.
const WHATSAPP_NUMBER = "919863657412";



// #####################################################################
// # SECTION 2 — THE PRICE BOX (top of the page)                      #
// #####################################################################
// This is the box that currently shows:
//     🔥 20% OFF
//     ₹2,500  ₹2,000  per person
//
// regular  = the normal price before any discount (shown crossed out)
// discount = the % taken off. 20 means "20% off". Set to 0 for no sale.
// enabled  = true  → show the 🔥 discount and crossed-out price
//            false → show only the regular price, no sale banner

const PRICES = {
  kremChympe: {
    regular: 2500,   // normal price, in rupees, no commas
    discount: 20,    // % off when enabled is true
    enabled: true     // true = show the discount, false = regular price only
  }
};

// How much ONE child (below 10 years) pays for the tour.
// Shown in the note: "...however Entry fee & life jacket will apply:
// ₹200/child"
const CHILD_PRICE = 200;

// The smallest amount someone is allowed to pay right now to hold
// their spot. Shown in the note and used to check the amount they type.
const MIN_PAY_AMOUNT = 500;



// #####################################################################
// # SECTION 3 — "Includes:" LIST (in the price box)                  #
// #####################################################################
// One line per item. To add an item, copy a line and change the words.
// To remove an item, delete its whole line (including the comma).

const TOUR_SERVICES = [
  "4×4 Jeep",
  "Tour Guide",
  "First aid & Safety gears",
  "Adventure Activities",
  "Entry & Registration Fees",
  "Life jacket"
];



// #####################################################################
// # SECTION 4 — "Note:" LIST (in the price box, italic text)         #
// #####################################################################

// How many people fit in one shared group/batch.
// Shown as: "Shared batch: 8 people"
const BATCH_SIZE = 5;

// How many days before the tour date someone must book by.
// Shown as: "Book at least 3 days in advance"
const ADVANCE_NOTICE_DAYS = 3;

// Note: the child-price and advance-payment lines in that same box use
// CHILD_PRICE and MIN_PAY_AMOUNT from Section 2 above — no need to set
// them twice.



// #####################################################################
// # SECTION 5 — FORM PAGE (the questions visitors fill in)           #
// #####################################################################

const CONTENT = {

  // Small red note near the top of the form: "* Indicates required..."
  requiredNote: "* Indicates required question",

  // The wording of each question on the first page of the form.
  labels: {
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email",
    tourDate: "Tour date",
    adults: "Number Of Adult",
    children: "Number of children",
    paymentMethod: "Payment Method",
  },

  // The three payment choices a visitor can tap.
  paymentOptions: {
    upi: "UPI",
    bank: "Bank Transfer",
    qr: "QR Code",
  },

  // Small red warning messages.
  errors: {
    required: "This is a required question",
    amount: "Enter an amount between ₹500 and the total amount",
  },

  // Every button and link on the site.
  buttons: {
    next: "Next",
    back: "Back",
    submit: "Submit",
    clearForm: "Clear form",
    copy: "Copy",
    downloadQr: "Download QR Code",
    openWhatsapp: "Open WhatsApp Chat",
    editResponse: "Edit your response",
    submitAnother: "Submit another response",
  },


  // ###################################################################
  // # SECTION 6 — "Payment By UPI" PAGE                               #
  // ###################################################################
  upi: {
    header: "Payment By UPI",
    payLabel: "PAY",
    note: "Opens Google Pay, PhonePe, Paytm or any UPI app on your phone",
    idLabel: "UPI ID",
    amountLabel: "Advance payment is required",
  },


  // ###################################################################
  // # SECTION 7 — "Bank Detail" PAGE                                  #
  // ###################################################################
  bank: {
    header: "Bank Detail",
    accountLabel: "A/C No",
    ifscLabel: "IFSC Code",
    amountLabel: "How much would you like to pay now?",
  },


  // ###################################################################
  // # SECTION 8 — "Scan QR Code" PAGE                                 #
  // ###################################################################
  qr: {
    header: "Scan QR Code",
    scanLabel: "SCAN AND PAY",
    note: "Save the image, then scan it with any UPI app to pay",
    amountLabel: "How much would you like to pay now?",
  },


  // ###################################################################
  // # SECTION 9 — "Almost Done!" PAGE (after someone submits)         #
  // ###################################################################
  confirm: {
    heading: "Almost Done!",
    note: "Your WhatsApp chat should have opened in a new tab with your booking details pre-filled. Just hit send there to confirm with our tour guide.",
    nameLabel: "Name",
    tourDateLabel: "Tour Date",
    paymentMethodLabel: "Payment Method",
    amountPaidLabel: "Amount Paying Now",
    balanceLabel: "Balance Due on Arrival",
    totalLabel: "Total Amount",
  }

};



// #####################################################################
// # SECTION 10 — PAYMENT DETAILS (UPI ID / Bank account / QR name)   #
// #####################################################################
// These are the actual numbers visitors pay to. Shown on the UPI and
// Bank Transfer pages, and printed on the QR code the visitor scans.

// Your UPI ID (for the "pay by UPI" option) and the name that shows
// when someone scans your QR code or pays by UPI.
const UPI_ID = "suchiangwining-1@oksbi";
const UPI_PAYEE_NAME = "Team Kremchympe Official";

// Your bank account details (for the "pay by Bank Transfer" option).
const BANK_ACCOUNT_NUMBER = "38706256304";
const BANK_IFSC_CODE = "SBIN0014615";

// NOTE ON THE QR CODE IMAGE ITSELF:
// The actual picture of the QR code (the square barcode people scan)
// is stored inside index.html because it's an image, not text — it
// can't be edited as words in this file. If you ever need a NEW QR
// code image, generate one from your UPI ID above at your bank/UPI
// app, then ask for help swapping the image in index.html. Everything
// else about that page (the text around it) is edited right here.
