import React, { Component } from 'react'
import BookConsumer from '../contexts/BookContext'
import ThemeConsumer from '../contexts/ThemeContext'
import Book from './Book'
import './css/Books.css'

class Books extends Component {
  render() {
    return (
      <ThemeConsumer>
        {(contextTheme) => (
          <BookConsumer>
            {
              contextBook => {
                const { books } = contextBook
                const { changeTheme, isThemeActive, dark, light } = contextTheme
                const theme = isThemeActive ? dark : light;

                return (
                  <section className="page-section" id="portfolio"
                    style={{ background: theme.bg, color: theme.txt }}
                  >
                    <div className="container">
                      <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        <button className="btn border-0"
                          style={ isThemeActive ? { background: '#fff', color: theme.txt } : { background: theme.txt, color: theme.bg }}
                          onClick={changeTheme}
                        >
                          {isThemeActive ? 'Light' : 'Dark'}
                        </button>
                      </div>
                      <div className="row">
                        {
                          books.map((book, i) => {
                            return <Book books={book} key={i} />
                          })
                        }
                      </div>
                    </div>
                  </section>
                )
              }
            }
          </BookConsumer>
        )}
      </ThemeConsumer>

    )
  }
}

export default Books;
