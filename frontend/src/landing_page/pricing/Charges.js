import React from "react";

function Charges() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="fs-5 text-center mb-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h3>
        <h2 className="fs-3 mb-4">Charges explained</h2>
        <div className="col-6 p-3">
          <h3 className="fs-6 text-muted">
            Securities/Commodities transaction tax
          </h3>
          <p
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br /> When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
            <br />
          </p>
          <h3 className="fs-6 text-muted">Call & trade</h3>
          <p
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h3 className="fs-6 text-muted">Stamp charges</h3>
          <p
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h3 className="fs-6 text-muted">Account with debit balance</h3>
          <p
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h3 className="fs-6 text-muted">NRI brokerage charges</h3>
          <ul
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <h3 className="fs-6 text-muted">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h3>
          <ul
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
          <h3 className="fs-6 text-muted">Margin Trading Facility (MTF)</h3>
          <ul
            className=" text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
          </ul>
        </div>

        <div className="col-6 p-3">
          <h3 className="fs-6 text-muted">GST</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h3 className="fs-6 text-muted">SEBI Charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h3 className="fs-6 text-muted">
            DP (Depository participant) charges
          </h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
            <br />
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
            <br />
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
            <br />
          </p>
          <h3 className="fs-6 text-muted">Pledging charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            ₹30 + GST per pledge request per ISIN.
          </p>
          <h3 className="fs-6 text-muted">AMC (Account maintenance charges)</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>{" "}
            <br />
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>{" "}
            <br />
          </p>
          <h3 className="fs-6 text-muted">Corporate action order charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h3 className="fs-6 text-muted">Off-market transfer charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            ₹25 per transaction.
          </p>
          <h3 className="fs-6 text-muted">Physical CMR request</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h3 className="fs-6 text-muted">Payment gateway charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h3 className="fs-6 text-muted">Delayed Payment Charges</h3>
          <p
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Learn more
            </a>
            .
          </p>
          <h3 className="fs-6 text-muted">Delayed Payment Charges</h3>
          <ul
            className=" text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
          >
            <li>
              <b>Delivery & MTF Brokerage</b>: 0.5% per executed order.
            </li>
            <li>
              <b>Intraday Brokerage</b>: 0.05% per executed order.
            </li>
          </ul>
        </div>
        <h5 className="fs-6 text-muted">Disclaimer</h5>
        <p
          className=" text-muted"
          style={{
            textAlign: "left",
            lineHeight: "2.5",
            fontSize: "12px",
          }}
        >
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Charges;
