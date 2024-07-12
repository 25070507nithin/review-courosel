// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  reviewRender = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="render-container">
        <img className="image" src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="company-name">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const review = reviewsList[activeIndex]
    return (
      <div className="reviews-bg-container">
        <h1>Reviews</h1>
        <div className="arrows-container">
          <button
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
            className="arrow-button"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          {this.reviewRender(review)}
          <button
            onClick={this.onClickRightArrow}
            className="arrow-button"
            type="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
