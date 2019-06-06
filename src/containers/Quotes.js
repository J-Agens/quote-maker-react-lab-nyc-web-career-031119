import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleRemoveClick = (quoteId) => {
    this.props.removeQuote(quoteId);
  }

  handleUpClick = (quoteId) => {
    this.props.upvoteQuote(quoteId);
  }

  handleDownClick = (quoteId) => {
    this.props.downvoteQuote(quoteId);
  }

  generateCards = () => {
    return this.props.quotes.map(quote => {
      return <QuoteCard
        key={quote.id}
        quote={quote}
        handleRemoveClick={this.handleRemoveClick}
        handleDownClick={this.handleDownClick}
        handleUpClick={this.handleUpClick}
        />
    });
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                this.generateCards()
                /*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))

  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
