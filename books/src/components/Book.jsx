import React, { Component } from 'react'
import ThemeConsumer from '../contexts/ThemeContext'

import './css/Book.css'

class Book extends Component {
  render() {

    const { title, author, imageURL } = this.props.books

    return <ThemeConsumer>
      {
        contextTheme => {

          const { isThemeActive, dark, light } = contextTheme
          const theme = isThemeActive ? dark : light;

          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover" style={{background: theme.hover}}>
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={imageURL} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">{title}</div>
                  <div className="portfolio-caption-subheading text-muted">{author}</div>
                </div>
              </div>
            </div>
          )
        }
      }
    </ThemeConsumer>

  }
}

export default Book;
