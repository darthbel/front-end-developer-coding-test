import React from 'react'
import SearchByCity from './SearchByCity'
import Restaurant from './Restaurant'
import PageButtons from './PageButtons'

class Restaurants extends React.Component {
  constructor() {
    super()

    this.state = {
      cityName: '',
      restaurantsData: [],
      currentPage: 1,
      totalRestaurants: 0,
      totalPages: 0,
      showResults: false,
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // method to fetch the data from the API
  fetchData(page) {
    try {
      // @todo Create validations
      this.setState({
        isLoading: true
      })
      fetch(
        'https://opentable.herokuapp.com/api/restaurants?city=' +
          this.state.cityName +
          '&page=' +
          page
      )
        .then(response => response.json())
        .then(response => {
          const { restaurants } = response
          const totalPages =
            parseInt(response.total_entries / response.per_page) + 1
          this.setState({
            restaurantsData: restaurants,
            totalRestaurants: response.total_entries,
            totalPages: totalPages,
            isLoading: false
          })
        })
    } catch (err) {
      console.error(err.message)
    }
  }

  handleClick(event) {
    let newCurrentPage = 0
    // according to which button clicked, the currentPage is updated in a different way
    switch (event.target.name) {
      case 'searchRestaurants':
        newCurrentPage = 1
        break
      case 'previousPage':
        newCurrentPage = this.state.currentPage - 1
        break
      case 'nextPage':
        newCurrentPage = this.state.currentPage + 1
        break
      default:
        newCurrentPage = 0
    }

    // Results are displayed
    this.setState({
      currentPage: newCurrentPage,
      showResults: true
    })
    this.fetchData(newCurrentPage)
    window.scrollTo(0, 0)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handlePageChange(event) {
    const newCurrentPage = this.state.currentPage + 1
    this.setState({
      currentPage: newCurrentPage
    })
    this.fetchData(newCurrentPage)
  }

  render() {
    return (
      <div className='container restaurants text-center'>
        <SearchByCity
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          cityName={this.state.cityName}
        />
        {/* showResults is true once the Search Restaurants button is clicked */}
        {this.state.showResults &&
          (this.state.isLoading ? (
            <div>Loading Results</div>
          ) : (
            <div className='results d-flex flex-wrap align-items-center justify-content-center'>
              {/* if there are more than 0 results, the results will be displayed */}
              {this.state.totalRestaurants > 0 ? (
                this.state.restaurantsData.map(restaurant => (
                  <Restaurant
                    className=''
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                ))
              ) : (
                // If 0 results, the following message will be displayed
                <div>No restaurants found</div>
              )}
            </div>
          ))}
        {this.state.totalRestaurants > 25 && (
          <PageButtons
            handleClick={this.handleClick}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
          />
        )}
      </div>
    )
  }
}

export default Restaurants
