import React, { Component } from "react";
const serialize = require('form-serialize');


export default class AddMovie extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        var onAddMovies = serialize(e.target, { hash: true });
        this.props.onAddMovie(onAddMovies);
        window.location.href = '/'
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form className="mt-5" onSubmit={this.handleFormSubmit}>
                        <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                        <div className="form-row d-flex align-items-center my-2">
                            <div className="form-group col-md-10 pe-3">
                                <label htmlFor="inputName" className="mb-2">Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name" />
                            </div>
                            <div className="form-row col-md-2">
                                <label htmlFor="inputRating" className="mb-2">Rating</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rating" />
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputImage" className="mb-2">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="imageURL" />
                            </div>
                        </div>
                        <div className="form-row mb-4">
                            <div className="form-group col-md-12">
                                <label htmlFor="overviewTextarea" className="mb-2">Overview</label>
                                <textarea
                                    className="form-control"
                                    name="overview" rows="5"></textarea>
                            </div>
                        </div>
                        <div className=" col-lg-12 text-end">
                            <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
