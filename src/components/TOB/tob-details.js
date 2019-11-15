import React from 'react'
import { Link } from "react-router-dom";

var tob = [
    {
      heading: "1. Panda Capital Ltd. trading as Switcheroo.ie",
      details: (
        <p>
          These Terms of Business set out the general terms under which our
          firm will provide business services to you and the respective duties
          and responsibilities of both the firm and you in relation to such
          services. Please ensure that you read these terms thoroughly and if
          you have any queries we will be happy to clarify them. If any
          material changes are made to these terms we will notify you.
        </p>
      )
    },
    {
      heading: "2.	Authorisation with the Central Bank of Ireland",
      details: (
        <p>
          Panda Capital Ltd. trading as Switcheroo.ie (C192972) is regulated
          by the Central Bank of Ireland as an insurance intermediary
          registered under the European Union (Insurance Distribution)
          Regulations 2018; and as a Mortgage Credit Intermediary under the
          European Union (Consumer Mortgage Credit Agreements) Regulations
          2016. Copies of our regulatory authorisations are available on
          request. The Central Bank of Ireland holds registers of regulated
          firms. You may contact the Central Bank of Ireland on 1890 777 777
          or alternatively visit their website at www.centralbank.ie to verify
          our credentials.
        </p>
      )
    },
    {
      heading: "3.	Codes of Conduct",
      details: (
        <p>
          Panda Capital Ltd. trading as Switcheroo.ie is subject to the
          Consumer Protection Code, Minimum Competency Code and Fitness &
          Probity Standards which offer protection to consumers. These Codes
          can be found on the Central Bank’s website{" "}
          <a href="https://www.centralbank.ie" target="_blank">
            www.centralbank.ie
          </a>
        </p>
      )
    },
    {
      heading: "4.	Our Services",
      details: (
        <p>
          Panda Capital Ltd. trading as Switcheroo.ie is a member of Brokers
          Ireland. Our principal business is to provide advice and arrange
          transactions on behalf of clients in relation to
          mortgages/life/general insurance products. A full list of insurers,
          product producers and lending agencies with which we deal is
          available on request.
          <h6>A. Mortgages</h6>
          Through the lenders or other undertakings with which we hold an
          agency, Panda Capital Ltd. trading as Switcheroo.ie can provide
          advice on and arrange mortgage products from the following range:
          fixed-rate loans, variable rate mortgages, capital & interest
          mortgages, interest only mortgages, endowment mortgages, pension
          mortgages and residential investment property. We provide mortgage
          advice on a fair analysis basis (providing services on the basis of
          a sufficiently large number of contracts and product producers
          available in the market to enable the firm to make a recommendation,
          in accordance with professional criteria, regarding which contract
          would be adequate to meet your needs). Through our relationship with
          Brokers Ireland Network the firm can arrange mortgages with the
          following lenders:
          <ul>
            <li>KBC Banks Ireland plc</li>
            <li>Permanent TSB plc</li>
            <li>AIB Mortgage Bank</li>
            <li>Haven Mortgages Limited</li>
            <li>Finance Ireland Credit Solutions DAC</li>
            <li>Dilosk Limited t/a Dilosk </li>
            <li>Seniors Money Mortgages (Ireland) DAC</li>
          </ul>
          <br />
          <h6>B. Life Insurance</h6>
          We provide life assurance advice on a limited analysis basis, i.e.
          providing services on the basis of a limited number of contracts
          within the market. We provide advice on the following product
          providers:
          <ul>
            <li>New Ireland Ltd.</li>
          </ul>
          <br/>
          We will provide assistance to you for any queries you may have in
          relation to the policies or in the event of a claim during the life
          of the policy and we will explain to you the various restrictions,
          conditions and exclusions attached to your policy. However, it is
          your responsibility to read the policy documents, literature and
          brochures to ensure that you understand the nature of the policy
          cover; particularly in relation to PHI and serious illness policies.
          <br /><br/>
          Specifically on the subject of permanent health insurance policies
          we will explain to you; a) the meaning of disability as defined in
          the policy; b) the benefits available under the policy; c) the
          general exclusions that apply to the policy; and d) the reductions
          applied to the benefit where there are disability payments from
          other sources.
          <br /><br/>
          For a serious illness policy, we will explain clearly to you the
          restrictions, conditions and general exclusions that attach to that
          policy.
          <h6>C. Non-Life </h6>
          We can provide advice on and arrange products for household
          insurance.
          <br /><br/>
          We provide general insurance advice on a limited analysis basis,
          i.e. providing services on the basis of a limited number of
          contracts within the market. We provide advice on the following
          product providers:
          <ul>
            <li>New Ireland Ltd.</li>
          </ul>
          <br/>
          We will also offer assistance to you in seeking renewal terms on
          your cover.
          <br /><br/>
          To ensure continuity of cover, where you have an existing policy
          which is due to expire and where we have been unable to contact you,
          we may put continuing cover in force whilst awaiting your
          instruction. You will be liable for any premiums payable to the
          relevant insurer for the period of time between renewal and when we
          receive your instruction. You have the right not to avail of this
          service.
        </p>
      )
    },
    {
      heading: "5.	Statement of Charges",
      details: (
        <p>
          We are remunerated by commission and other payments from product
          producers or lenders on the completion of business.
          <h6>A. Mortgages </h6>
          We may receive up to 1% (or whatever maximum is applicable) of the
          loan for arranging mortgage finance. This commission is paid by the
          mortgage lender. The actual amount of commission will be disclosed
          at a later stage in the ESIS (European Standardised Information
          Sheet) which will be forwarded to you. Information on the variation
          in levels of commission payable by the different creditors providing
          credit agreements being offered are available on request.
          <br /><br />
          Please note that lenders may charge specific fees in certain
          circumstances. If this applies, these fees will be specified in your
          Loan Offer. You have the right to pay a fee separately and not
          include it in the loan.
          <h6>B. Life Assurance</h6>
          In respect of life assurance the firm may receive commission and
          other payments from the insurance companies to whom orders are
          transmitted. Summary details of these payments will be included in a
          quality information document, which you are legally entitled to
          receive before an application for a product is completed, and full
          details will be included with your cooling off letter.
          <h6>C. General Insurance</h6>
          We may be remunerated by commission from insurers on completion of
          business. Details of this remuneration are available on request.
          Where an override commission is received, this will be disclosed to
          you in general terms.
        </p>
      )
    },
    {
      heading: "6.	Regular Reviews",
      details: (
        <p>
          It is in your best interests that you review, on a regular basis,
          the products which we have arranged for you. As your circumstances
          change, your needs will change. You must advise us of those changes
          and request a review of the relevant policy so that we can ensure
          that you are provided with up to date advice and products best
          suited to your needs. Failure to contact us in relation to changes
          in your circumstances or failure to request a review, may result in
          you having insufficient insurance cover.
        </p>
      )
    },
    {
      heading: "7.	Disclosure of Information",
      details: (
        <p>
          Any failure to disclose material information may invalidate your
          claim and render your policy void.
          <br /><br />
          It is important that you and all of the parties in this transaction
          advise us of all material facts concerning your circumstances. A
          material fact is one which is likely to influence us in our
          assessment and recommendations relating to your application for
          revised repayment terms. If you are in doubt as to whether a fact is
          material then it should be disclosed.
        </p>
      )
    },
    {
      heading: "8.	Conflicts of interest ",
      details: (
        <p>
          It is the policy of our firm to avoid conflicts of interest in
          providing services to you. However, where an unavoidable conflict of
          interest arises we will advise you of this in writing before
          providing you with any service. A full copy of our conflicts of
          interest policy is available on request.
        </p>
      )
    },
    {
      heading: "9.	Default on payments by clients ",
      details: (
        <p>
          We will exercise our legal rights to receive payments due to us from
          clients (fees and insurance premiums) for services provided. In
          particular, without limitation to the generality of the foregoing,
          the firm will seek reimbursement for all payments made to insurers
          on behalf of clients where the firm has acted in good faith in
          renewing a policy of insurance for the client.
          <br /><br />
          Product producers may withdraw benefits or cover in the event of
          default on payments due under policies of insurance or other
          products arranged for you. We would refer you to policy documents or
          product terms for the details of such provisions.
          <br /><br />
          Mortgage lenders may seek early repayment of a loan and interest if
          you default on your repayments. Your home is at risk if you do not
          maintain your agreed repayments.
        </p>
      )
    },
    {
      heading: "10.	Complaints",
      details: (
        <p>
          Whilst we are happy to receive verbal complaints, it would be
          preferable that any complaints are made in writing. We will
          acknowledge your complaint in writing within 5 business days and we
          will fully investigate it. We shall investigate the complaint as
          swiftly as possible, and the complainant will receive an update on
          the complaint at intervals of not greater than 20 business days
          starting from the date on which the complaint is made. On completion
          of our investigation, we will provide you with a written report of
          the outcome. In the event that you are still dissatisfied with our
          handling of or response to your complaint, you are entitled to refer
          the matter to the Financial Services and Pensions Ombudsman (FSPO).
          A full copy of our complaints procedure is available on request.{" "}
        </p>
      )
    },
    {
      heading: "11. Data Protection",
      details: (
        <p>
          We are subject to the requirements of the General Data Protection
          Regulation 2018 and the Irish Data Protection Act 2018.
          <br /><br />
          Switcheroo.ie. is committed to protecting and respecting your
          privacy. We wish to be transparent on how we process your data and
          show you that we are accountable with the GDPR in relation to not
          only processing your data but ensuring you understand your rights as
          a client.
          <br /><br />
          The data will be processed only in ways compatible with the purposes
          for which it was given and as outlined in our <Link target="_blank" to="/data-privacy-notice">Data Privacy Notice</Link>,
          this will be available to all our clients at the time of data
          collection.
          <br /><br />
          Please contact us at <a href="mailto:Privacy@Switcheroo.ie">Privacy@Switcheroo.ie</a> if you have any concerns
          about your personal data.
        </p>
      )
    },
    {
      heading: "12.	Compensation Scheme",
      details: (
        <p>
          We are members of the Investor Compensation Scheme operated by the
          Investor Compensation Company Ltd. See below for details.
          <h6>A. Investor Compensation Scheme</h6>
          The Investor Compensation Act, 1998 provides for the establishment
          of a compensation scheme and the payment, in certain circumstances,
          of compensation to certain clients (known as eligible investors) of
          authorised investment firms, as defined in that Act.
          <br /><br />
          The Investor Compensation Company Ltd. (ICCL) was established under
          the 1998 Act to operate such a compensation scheme and our firm is a
          member of this scheme.
          <br /><br />
          Compensation may be payable where money or investment instruments
          owed or belonging to clients and held, administered or managed by
          the firm cannot be returned to those clients for the time being and
          where there is no reasonably foreseeable opportunity of the firm
          being able to do so.
          <br /><br />
          A right to compensation will arise only:
          <ul>
            <li>
              If the client is an eligible investor as defined in the Act; and
            </li>
            <li>
              If it transpires that the firm is not in a position to return
              client money or investment instruments owned or belonging to the
              clients of the firm; and
            </li>
            <li>
              To the extent that the client’s loss is recognised for the
              purposes of the Act.
            </li>
          </ul>
          <br />
          Where an entitlement to compensation is established, the
          compensation payable will be the lesser of:
          <ul>
            <li>
              90% of the amount of the client’s loss which is recognised for
              the purposes of the Investor Compensation Act, 1998; or
            </li>
            <li>Compensation of up to €20,000.</li>
          </ul>
          <br />
          For further information, contact the Investor Compensation Company
          Ltd. at (01) 224 4955.
          <h6>B. Brokers Ireland Compensation Fund </h6>
          We are also members of the Brokers Ireland Compensation Fund.
          Subject to the rules of the scheme the liabilities of its members
          firms up to a maximum of €100,000 per client (or €250,000 in
          aggregate) may be discharged by the fund on its behalf if the member
          firm is unable to do so, where the above detailed Investor
          Compensation Scheme has failed to adequately compensate any client
          of the member. Further details are available on request.
        </p>
      )
    },
    {
      heading: "13.	Privacy Policy Consents, Permissions and Acknowledgements",
      details: (
        <p>
          Here at Switcheroo.ie we take your privacy seriously and will only
          use your personal information to provide the products and services
          you have requested from us. We use your personal information as
          outlined in our Data Privacy Statement. In order to allow us provide
          you with the products and services we offer you, we will need your
          consent to the collection, processing, sharing and storing of your
          personal information as follows:
          <br /><br/>
          I/We consent to Switcheroo.ie collecting, processing, sharing and
          storing my/our personal data as outlined in Switcheroo.ie Data
          Privacy Statement including special category personal information
          such as health data for the purposes of Switcheroo.ie providing
          me/us with mortgage finance, life assurance, associated insurance
          products and Home insurance.
        </p>
      )
    }
  ];
  export default tob;