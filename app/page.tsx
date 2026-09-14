"use client";
import { useState } from "react";
import "./globals.css";
export default function Home(){
 const [menuOpen,setMenuOpen]=useState(false);
 function handleSubmit(e:React.FormEvent<HTMLFormElement>,type:"buyer"|"supplier"){e.preventDefault();alert(`Thank you. Your ${type==="buyer"?"buyer inquiry":"supplier registration"} has been received by BunaBridge.\n\nEmail: Yosepht@BunaBridge.store\nPhone: +251 988 525 207`);e.currentTarget.reset();}
 return (<>
<header><div className="container nav">
<a className="logo" href="#home"><span className="mark">◒</span><span>BunaBridge<small>ETHIOPIAN SPECIALTY COFFEE BROKERAGE</small></span></a>
<button className="hamb" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
<nav className={`links ${menuOpen ? "open" : ""}`}><a href="#home">Home</a><a href="#about">About Us</a><a href="#origins">Coffee Origins</a><a href="#services">Services</a><a href="#buyers">For Buyers</a><a href="#suppliers">For Suppliers</a><a href="#brokerage">Brokerage</a><a href="#contact" className="get">Get in Touch</a></nav>
</div></header>

<section id="home" className="hero"><div className="container"><div className="hero-copy">
<div className="eyebrow">Premium Ethiopian Coffee &nbsp; | &nbsp; Global Connections</div>
<h1>Connecting Exceptional <span style={{color:"var(--leaf)"}}>Ethiopian Coffee</span> with Global Buyers</h1>
<p>BunaBridge is a specialty coffee brokerage, bridging international buyers with trusted Ethiopian suppliers. We source high-quality green coffee beans and facilitate transparent, reliable and long-term trade relationships.</p>
<div className="buttons"><a className="btn green" href="#buyers">Source Coffee →</a><a className="btn outline" href="#suppliers">Become a Supplier →</a></div>
</div></div></section>

<div className="container features"><div className="feature-grid">
<div className="feature"><b>QUALITY FOCUSED</b><span>Specialty grade coffee sourced from Ethiopian origins</span></div>
<div className="feature"><b>TRUST & TRANSPARENCY</b><span>Independent brokerage for fair and clear transactions</span></div>
<div className="feature"><b>GLOBAL NETWORK</b><span>Connecting Ethiopian suppliers to buyers worldwide</span></div>
<div className="feature"><b>SUSTAINABLE TRADE</b><span>Supporting responsible coffee relationships</span></div>
<div className="feature"><b>RELIABLE PARTNER</b><span>Professional support from sourcing to coordination</span></div>
</div></div>

<section id="about"><div className="container"><div className="section-top"><div className="eyebrow">Our Coffee Origins</div><h2>Ethiopian Specialty Coffee</h2><p>From the highlands of Ethiopia, we source distinct and high-quality green coffees, each with unique flavor profiles and characteristics.</p></div>
<div className="origins"><div className="intro"><h3 style={{font:"700 25px Georgia,serif",color:"var(--forest)"}}>Our Premium Coffee Origins</h3><p>Ethiopia is the birthplace of coffee and home to diverse microclimates that produce complex and distinctive cups.</p><a className="btn" style={{border:"1px solid var(--forest)",color:"var(--forest)"}} href="#buyers">Explore All Origins →</a></div>
<div id="origins" className="origin-grid">
<div className="origin"><img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Yirgacheffe</h3><p>Floral, tea-like with bright citrus and delicate sweetness.</p><span className="pill">Floral • Citrus</span></div></div>
<div className="origin"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Guji</h3><p>Fruity, complex and clean with vibrant acidity.</p><span className="pill">Fruity • Complex</span></div></div>
<div className="origin"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Sidamo</h3><p>Balanced, sweet and aromatic with fruit character.</p><span className="pill">Balanced • Sweet</span></div></div>
<div className="origin"><img src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Limu</h3><p>Bright, smooth and clean with floral notes.</p><span className="pill">Floral • Smooth</span></div></div>
<div className="origin"><img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Jimma</h3><p>Full-bodied with earthy tones and sweet finish.</p><span className="pill">Nutty • Chocolate</span></div></div>
<div className="origin"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85" /><div className="body"><h3>Lekempti</h3><p>Bright, clean and balanced with fruit character.</p><span className="pill">Bright • Clean</span></div></div>
</div></div></div></section>

<section id="services" className="services"><div className="container"><div className="service-layout"><div className="service-hero"><div className="eyebrow">Our Services</div><h2>Trade support built around your coffee needs.</h2><p>End-to-end brokerage and trade support for specialty coffee buyers and suppliers.</p></div><div className="service-col"><div className="service-card"><h3>Specialty Coffee Sourcing</h3><p>Find green coffee that matches your origin, quality and cup profile.</p></div><div className="service-card"><h3>Supplier & Exporter Matching</h3><p>Connect qualified buyers with suitable Ethiopian supply partners.</p></div><div className="service-card"><h3>Buyer Requirement Sourcing</h3><p>Turn a buying brief into relevant coffee opportunities.</p></div></div><div className="service-col"><div className="service-card"><h3>Sample Coordination</h3><p>Facilitate samples and communication before commercial decisions.</p></div><div className="service-card"><h3>Price & Contract Negotiation</h3><p>Support discussions on quality, quantity, price and terms.</p></div><div className="service-card"><h3>Pre-shipment & Trade Coordination</h3><p>Support communication through contracting and delivery.</p></div></div></div></div></section>

<section><div className="container twopanels"><div id="buyers" className="panel"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85" /><h3>For Buyers</h3><p>Find the right coffee, from the right source. Tell us your requirements and we will match you with suitable Ethiopian coffees and supply partners.</p><a className="btn green" href="#buyer-form">Submit Buyer Inquiry →</a></div><div id="suppliers" className="panel"><img src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1000&q=85" /><h3>For Suppliers</h3><p>Showcase your coffee to qualified international buyers and build long-term commercial relationships.</p><a className="btn green" href="#supplier-form">Supplier Registration →</a></div></div></section>

<section id="brokerage" className="process"><div className="container"><div className="section-top"><div className="eyebrow">The BunaBridge Brokerage Process</div><h2>Simple. Transparent. Effective.</h2><p>We connect buyers and suppliers, facilitate communication and support commercial discussions through the transaction.</p></div><div className="process-grid"><div className="step"><div className="num">1</div><h3>Share Your Needs</h3><p>Tell us what you are looking for as a buyer or supplier.</p></div><div className="step"><div className="num">2</div><h3>Match & Verify</h3><p>We connect you with qualified and trusted partners.</p></div><div className="step"><div className="num">3</div><h3>Negotiate & Confirm</h3><p>We facilitate price, quality and contract terms.</p></div><div className="step"><div className="num">4</div><h3>Trade & Deliver</h3><p>We coordinate pre-shipment communication and delivery support.</p></div></div></div></section>

<section id="inquiries"><div className="container"><div className="section-top"><div className="eyebrow">Work With BunaBridge</div><h2>Tell us what you need.</h2><p>Use the forms below to start a buyer or supplier conversation.</p></div><div className="forms">
<div id="buyer-form" className="formbox"><h3>Buyer Inquiry Form</h3><p>Tell us your coffee requirements.</p><form onSubmit={(e)=>handleSubmit(e,"buyer")}><div className="two"><div><label>Name *</label><input required /></div><div><label>Company *</label><input required /></div></div><div className="two"><div><label>Email *</label><input required type="email" /></div><div><label>Country *</label><input required /></div></div><div className="two"><div><label>Origin</label><select><option>Any Ethiopian Origin</option><option>Yirgacheffe</option><option>Guji</option><option>Sidamo</option><option>Limu</option><option>Jimma</option><option>Lekempti</option></select></div><div><label>Processing</label><select><option>Any</option><option>Washed</option><option>Natural</option><option>Honey</option></select></div></div><label>Requirements / Cup Profile</label><textarea placeholder="Volume, cup score, flavor profile, destination, Incoterm..."></textarea><button className="btn green">Submit Inquiry →</button></form></div>
<div id="supplier-form" className="formbox"><h3>Supplier Registration Form</h3><p>Showcase your available coffee.</p><form onSubmit={(e)=>handleSubmit(e,"supplier")}><div className="two"><div><label>Company *</label><input required /></div><div><label>Contact Person *</label><input required /></div></div><div className="two"><div><label>Email *</label><input required type="email" /></div><div><label>Phone / WhatsApp</label><input /></div></div><div className="two"><div><label>Origin / Region</label><input placeholder="e.g. Guji" /></div><div><label>Processing</label><select><option>Washed</option><option>Natural</option><option>Honey</option><option>Multiple</option></select></div></div><div className="two"><div><label>Available Quantity</label><input placeholder="e.g. 50 MT" /></div><div><label>Harvest</label><input /></div></div><label>Coffee Description</label><textarea placeholder="Grade, cup profile, certification, sample availability..."></textarea><button className="btn green">Register Now →</button></form></div>
</div></div></section>

<section id="contact" className="contact"><div className="container contact-grid"><div><div className="eyebrow">Get In Touch</div><h2>Quality Coffee.<br>Strong Partnerships.<br>A More Connected Coffee World.</h2><p>Let's build long-term specialty coffee relationships between Ethiopia and international markets.</p><a className="btn green" href="mailto:Yosepht@BunaBridge.store">Email BunaBridge →</a></div><div className="contact-card"><b>EMAIL</b><a href="mailto:Yosepht@BunaBridge.store">Yosepht@BunaBridge.store</a><b>PHONE / WHATSAPP</b><a href="tel:+251988525207">+251 988 525 207</a><b>FOCUS</b><div style={{fontSize:"12px"}}>Ethiopian green coffee • International buyers • Specialty coffee brokerage</div></div></div></section>
<footer>
  <div className="footer-inner">
    <div>
      <div className="brand">BunaBridge</div>
      <h2>Quality Coffee.<br />Strong Partnerships.<br />A More Connected Coffee World.</h2>
      <p>
        Let's build long-term specialty coffee relationships together.
      </p>
    </div>

    <div className="footer-links">
      <a href="#services">Services</a>
      <a href="#buyers">For Buyers</a>
      <a href="#suppliers">For Suppliers</a>
      <a href="#origins">Origins</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-contact">
      <b>PHONE</b>
      <a href="tel:+251988525207">+251 988 525 207</a>

      <b>EMAIL</b>
      <a href="mailto:Yosepht@BunaBridge.store">
        Yosepht@BunaBridge.store
      </a>

      <b>LOCATION</b>
      <span>Addis Ababa, Ethiopia</span>
    </div>
  </div>
</footer>
</>);
}
