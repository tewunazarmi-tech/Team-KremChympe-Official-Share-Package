// =====================================================================
// 🏷️  prices.js — EDIT THIS FILE to change a price or run/end a sale
// =====================================================================
// This is the ONLY file you need to open to change a price or a discount.
// After you save this file and publish/update it on GitHub, everyone who
// visits the website will automatically see the new price.
//
// ────────────────────────────────────────────────────────────────────
// TO CHANGE THE DISCOUNT AMOUNT:
//   Find the line that says       discount: 15,
//   Change the number, e.g.       discount: 30,
//   (30 means "30% off")
//
// TO TURN THE DISCOUNT OFF (show regular price, no sale):
//   Find the line that says       enabled: true
//   Change it to                  enabled: false
//
// TO TURN THE DISCOUNT BACK ON:
//   Change it back to             enabled: true
//
// TO CHANGE THE REGULAR (non-sale) PRICE:
//   Change the number after       regular:
// ────────────────────────────────────────────────────────────────────

const PRICES = {

  // Kremchympe Adventures — price is PER PERSON (adults)
  kremChympe: {
    regular: 3000,   // normal price, in rupees, no commas
    discount: 15,    // % off when enabled is true
    enabled: true     // true = show the discount, false = show regular price only
  }

  // If you add another destination site later (e.g. Wilderness Expedition),
  // you can add another entry the same way:
  //
  // wilderness: {
  //   regular: 16999,
  //   discount: 20,
  //   enabled: true
  // }

};
