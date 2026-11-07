// Generated from the reviewed Markdown note. Edit the Markdown, then regenerate.
export type Seg = { t: string; href?: string };
export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; segs: Seg[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'ul'; items: Seg[][] };

export const NOTE_TITLE = "Ohio tax certificate returns: the 6 percent floor, the 0 percent bid and the foreclosure clock";

export const NOTE_BLOCKS: Block[] = [
  {
    "type": "p",
    "segs": [
      {
        "t": "Ohio lets each county treasurer decide whether to sell tax certificates at all (R.C. 5721.31(A)(1)). Counties that skip certificates foreclose the tax lien directly, so the first step is the county treasurer's own sale notice. This note covers the counties that do hold a public certificate auction under Ohio Revised Code 5721.32, and the arithmetic that decides what a certificate pays."
      }
    ]
  },
  {
    "type": "h2",
    "text": "How the auction sets your rate"
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "You bid an interest rate. The treasurer opens each certificate at 18 percent simple interest per year and takes lower bids in quarter-point steps, down to 0 percent. The lowest rate wins. If two bidders tie, the treasurer picks the winner, and that call cannot be appealed (R.C. 5721.32(C))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "The price is fixed. You pay the certificate purchase price: the delinquent taxes, assessments, penalties and interest charged against the parcel at the time of the sale, minus any already covered by an earlier certificate, plus the treasurer's fee (R.C. 5721.30(D), (P)). Before the auction starts you file the bidder registration form, a state form, with the county treasurer. It includes a tax identification number, and you pay a $500 cash registration fee with it. The county gives the fee back at the end of bidding unless you win, in which case it can count toward your deposit (R.C. 5721.32(B)(2)). Some treasurers require a bank letter showing you can pay, plus written permission to verify it, and bar you from bidding without them (R.C. 5721.32(B)(3))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Winning starts two clocks. You owe a cash deposit of at least 10 percent of the purchase price by the close of business on sale day, then the rest of the price, including the treasurer's fee, within five business days. Miss the second deadline and you forfeit the deposit (R.C. 5721.32(D)(1)). A certificate is never sold to the parcel's owner (R.C. 5721.32(J))."
      }
    ]
  },
  {
    "type": "h2",
    "text": "What a redemption pays you"
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "For an auction certificate, the redemption price is the purchase price plus whichever is larger: simple interest at your bid rate, or 6 percent of the purchase price (R.C. 5721.30(E)(1)). Interest builds monthly. Each month adds one-twelfth of your annual rate times the purchase price, starting on the first day of the month after you buy. The 6 percent charge applies even if the owner pays before that first monthly date (R.C. 5721.41)."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Let's work one. Say the purchase price is $4,000, so the 6 percent floor is $240."
      }
    ]
  },
  {
    "type": "table",
    "head": [
      "Your bid",
      "Interest per month",
      "Monthly accruals before interest equals the $240 floor"
    ],
    "rows": [
      [
        "18%",
        "$60",
        "4"
      ],
      [
        "9%",
        "$30",
        "8"
      ],
      [
        "6%",
        "$20",
        "12"
      ],
      [
        "3%",
        "$10",
        "24"
      ],
      [
        "0.25%",
        "about $0.83",
        "288, far past a 6-year certificate period"
      ]
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Here is why the table matters. If the owner redeems within the first year, every bid from 0.25 percent up to 6 percent returns the same $240. A higher bid only pays more when the parcel stays unredeemed long enough for interest to pass the floor."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "A 0 percent bid is the exception. Its redemption price is the purchase price plus the treasurer's fee, with no 6 percent charge (R.C. 5721.30(E)(2)). A bidder at 0 percent earns no interest if the owner redeems before you file and pay, so the bid mainly buys the right to foreclose. Because the treasurer's fee is part of the certificate purchase price, a redemption at a positive rate returns it with the rest of the price (R.C. 5721.30(D))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Certificates a treasurer sells by negotiated sale under R.C. 5721.33 follow a different formula: purchase price, interest actually accrued at the certificate rate, any treasurer's fee and recording fees, with no 6 percent floor (R.C. 5721.30(F))."
      }
    ]
  },
  {
    "type": "h2",
    "text": "The foreclosure clock"
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "You can ask for foreclosure only after one year from the sale date on the certificate, and no later than the end of the certificate period (R.C. 5721.37(A)(1)). For auction certificates the treasurer sets that period at three to six years (R.C. 5721.32(A)). If the period runs out before you file with the required payment, your lien is canceled and the certificate is void (R.C. 5721.37(E)(1)). If the owner files for bankruptcy before the period ends, the period pauses while the case stays open, and you must file a proof of claim to protect your interest (R.C. 5721.37(A)(2))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Filing costs money up front. With the request you pay the redemption prices of any other holders' certificates on the parcel, any taxes and charges not covered by a certificate, and the prosecuting attorney's fee when the prosecutor brings the case (R.C. 5721.37(B)). On the private-attorney route, the attorney must file the court case within 120 days after the notice of intent. Miss that, and your certificates on the parcel whose deadline for filing a notice of intent has passed are void, and you forfeit the taxes you advanced (R.C. 5721.37(C)(2), (E)(3))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Your bid-rate interest stops when you file and pay (R.C. 5721.30(J)(1)). From then on, redemption gets more expensive for the owner. On top of every certificate's redemption price, the owner owes 18 percent per year on each certificate's purchase price from the day you paid, the prosecutor's fee plus 18 percent on it, reasonable private attorney fees and other costs of the case (R.C. 5721.38(B)). Attorney fees up to $2,500 are presumed reasonable; anything above that needs a court order (R.C. 5721.371(A)(2), (B)(1)). The treasurer also pays you 18 percent per year on the taxes and the prosecutor's fee you advanced (R.C. 5721.38(B)). The owner can still redeem until the sale confirmation is filed, a decree vests title in you or, in a prosecutor's case under R.C. 323.65 to 323.79, the alternative redemption period ends (R.C. 5721.38(B))."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Before you file and pay, the owner can redeem the whole parcel by paying every certificate (R.C. 5721.38(A)) or redeem certificates one at a time, oldest lien first (R.C. 5721.381(A), (C)). During the first year after an auction sale, the treasurer may also agree to a payment plan with the owner that must finish within that year (R.C. 5721.38(C)(1))."
      }
    ]
  },
  {
    "type": "h2",
    "text": "When the certificate becomes the land"
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "By default the complaint asks the court to order the parcel sold (R.C. 5721.37(F)). In a private-attorney foreclosure, if the county auditor's true value of the parcel is below the certificate purchase price, the complaint instead asks the court to vest fee simple title in you, free of subordinate liens. If that case reaches a decree, you own the parcel, along with the cost of holding and clearing it."
      }
    ]
  },
  {
    "type": "h2",
    "text": "Next steps"
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "Check whether your county runs a certificate auction or forecloses directly on the "
      },
      {
        "t": "Ohio tax sale page",
        "href": "https://www.taxsaleatlas.com/ohio/"
      },
      {
        "t": ". Read "
      },
      {
        "t": "how Ohio tax sales work",
        "href": "https://www.taxsaleatlas.com/guides/how-ohio-tax-sales-work/"
      },
      {
        "t": " for the foreclosure and forfeited land routes. Then run your bid rate and holding period through the "
      },
      {
        "t": "tax lien yield calculator",
        "href": "https://www.taxsaleatlas.com/tools/tax-lien-yield-calculator/"
      },
      {
        "t": " before the auction."
      }
    ]
  },
  {
    "type": "p",
    "segs": [
      {
        "t": "This note summarizes Ohio statutes as published in November 2026. It is general information, not legal or financial advice, and county procedures vary. Confirm the rules with the county treasurer and a licensed Ohio attorney before you bid."
      }
    ]
  },
  {
    "type": "h2",
    "text": "Sources"
  },
  {
    "type": "ul",
    "items": [
      [
        {
          "t": "Ohio Revised Code 5721.30, Tax certificate definitions. Ohio Legislative Service Commission. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.30",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.30"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.31, Selecting parcels for tax certificate sales. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.31",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.31"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.32, Sale of tax certificates by public auction. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.32",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.32"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.37, Filing request for foreclosure. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.37",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.37"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.371, Private attorney's fees in tax certificate actions. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.371",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.371"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.38, Right to redeem. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.38",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.38"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.381, Payment of certificate redemption price before foreclosure. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.381",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.381"
        }
      ],
      [
        {
          "t": "Ohio Revised Code 5721.41, Interest charges. "
        },
        {
          "t": "https://codes.ohio.gov/ohio-revised-code/section-5721.41",
          "href": "https://codes.ohio.gov/ohio-revised-code/section-5721.41"
        }
      ]
    ]
  }
];
