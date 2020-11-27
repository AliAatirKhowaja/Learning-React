import React, { Component } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';





class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            tags: ["tag1", "tag2", "tag3"],
            moviesList: [{
                _id: 8932749247467389682,
                title: "terminator",
                genre: { _id: "38927489357942337", name: "Action" },
                numberInStock: 6,
                dailyRentalRate: "2018-10-21"
            },
            {
                _id: 89327492474673896821,
                title: "Hello",
                genre: { _id: "38927489357924437", name: "Action" },
                numberInStock: 6,
                dailyRentalRate: "2018-10-21"
            },
            {
                _id: 89327492474673896822,
                title: "Cs1.6",
                genre: { _id: "389274893579443237", name: "Action" },
                numberInStock: 6,
                dailyRentalRate: "2018-10-21"
            },
            {
                _id: 89327492474673832e96822,
                title: "Die Dard",
                genre: { _id: "38927443r893579443237", name: "Romantic" },
                numberInStock: 6,
                dailyRentalRate: "2018-10-21"
            }
            ]

        }


    }



    display = () => {

        return this.state.count === 0 ? "You have no movie in database !!" : this.state.count;
    }

    deleteHandle = (index) => {
        const temp = [...this.state.moviesList];
        temp.splice(index, 1);
        this.setState({
            moviesList: temp
        })



    }


    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Showing {this.state.moviesList.length} movies in database.</h1>

                        <table className="table">
                            <tr>
                                <th>Title</th>
                                <th>Gerne</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>

                            </tr>
                            {this.state.moviesList.map((movie, index) => <tr>
                                <td>{movie.title}</td>
                                <td id={movie.genre.id}>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <th><button onClick={() => this.deleteHandle(index)} className="btn btn-danger">Delete</button></th>
                            </tr>)}


                        </table>
                    </Col>
                </Row>

            </Container>
        );
    }



}



export default ProductCard;