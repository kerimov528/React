import axios from "axios";
import React, { Component } from "react";


export default class EditMovie extends Component {
    state = {
        name: "",
        rating: "",
        imageURL: "",
        overview: ""
    }

    async componentDidMount () {
        const id = localStorage.getItem("id");
        const response = await axios.get(`http://localhost:2002/movies/${id}`)

        const {name,rating,imageURL,overview} = response.data

        this.setState({
            name,
            rating,
            imageURL,
            overview
        })
    }

    onInputChanged = (e) => {
        const stateObj = e.target.name
        const value = e.target.value
        this.setState({
            [stateObj] : value
        })
    }

    handleFormSubmit = (e)=> {
        e.preventDefault()
        const id = localStorage.getItem("id");
        const {name,rating,imageURL,overview} = this.state

        const updateMovie = {
            name,
            rating,
            imageURL,
            overview
        }
        this.props.onEditMovie(id,updateMovie);
        setTimeout(() => {
        window.location.href = '/'
        }, 1000);
    }
    render() {
        const {name,rating,imageURL,overview} = this.state
        return (
            <div>
                <div className="container">
                    <form className="mt-5" onSubmit={this.handleFormSubmit}>
                        <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form And To Save You Work.." disabled />
                        <div className="form-row d-flex align-items-center my-2">
                            <div className="form-group col-md-10 pe-3">
                                <label htmlFor="inputName" className="mb-2">Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name" 
                                    value={name}
                                    onChange={this.onInputChanged}/>
                            </div>
                            <div className="form-row col-md-2">
                                <label htmlFor="inputRating" className="mb-2">Rating</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rating"
                                    value={rating} 
                                    onChange={this.onInputChanged}/>
                            </div>
                        </div>
                        <div className="form-row my-2">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputImage" className="mb-2">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="imageURL"
                                    value={imageURL} 
                                    onChange={this.onInputChanged}/>
                            </div>
                        </div>
                        <div className="form-row mb-4">
                            <div className="form-group col-md-12">
                                <label htmlFor="overviewTextarea" className="mb-2">Overview</label>
                                <textarea
                                    className="form-control"
                                    name="overview" 
                                    rows="5"
                                    value={overview}
                                    onChange={this.onInputChanged}
                                    ></textarea>
                            </div>
                        </div>
                        <div className=" col-lg-12 text-end">
                        <input type="submit" className="btn btn-danger btn-block" value="Save Edit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
