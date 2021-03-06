import React from 'react';

const QuoteDisplayBox = {
  boxSizing: "border-box",
  margin: '0 auto 25px auto',
  width: '500px',
  maxWidth: '100%',
  minHeight: '200px',
  padding: '0 1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const QuoteText = {
  fontSize: '1.4rem'
}

const Quote = props => (
  <div style={QuoteDisplayBox}>
    <p style={QuoteText}>{props.quote}</p>
  </div>
);

export default Quote;