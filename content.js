// =====================================================================
// 📝  content.js — EDIT THIS FILE to change ANY text visitors see
// =====================================================================
// Everything a visitor reads on the booking page — every label, every
// button, every note — is written out below in plain English.
//
// TO CHANGE ANY TEXT ON THE WEBSITE:
//   Find the line with the words you want to change, between the
//   quotes " ", and type your new words in their place.
//   Do NOT delete the quotes " " or the comma , at the end of the line.
//
// Example — to change a button from "Next" to "Continue":
//   next: "Next",              becomes      next: "Continue",
//
// After you save this file and publish/update it on GitHub, every
// visitor will see your new text.
// =====================================================================

const CONTENT = {

  // Small red note near the top of the form telling people that
  // fields marked with a * must be filled in.
  requiredNote: "* Indicates required question",

  // The words on each question on the first page of the form.
  labels: {
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email",
    tourDate: "Tour date",
    adults: "Number Of Adult",
    children: "Number of children",
    paymentMethod: "Payment Method",
  },

  // The three payment choices someone can tap.
  paymentOptions: {
    upi: "UPI",
    bank: "Bank Transfer",
    qr: "QR Code",
  },

  // Small red messages that appear if someone forgets to fill
  // something in, or types in a payment amount that's too small/big.
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

  // Text shown on the "Pay by UPI" page.
  upi: {
    header: "Payment By UPI",
    payLabel: "PAY",
    note: "Opens Google Pay, PhonePe, Paytm or any UPI app on your phone",
    idLabel: "UPI ID",
    amountLabel: "Advance payment is required",
  },

  // Text shown on the "Bank Transfer" page.
  bank: {
    header: "Bank Detail",
    accountLabel: "A/C No",
    ifscLabel: "IFSC Code",
    amountLabel: "How much would you like to pay now?",
  },

  // Text shown on the "Scan QR Code" page.
  qr: {
    header: "Scan QR Code",
    scanLabel: "SCAN AND PAY",
    note: "Save the image, then scan it with any UPI app to pay",
    amountLabel: "How much would you like to pay now?",
  },

  // Text shown on the very last "Almost Done!" page, after someone submits.
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
