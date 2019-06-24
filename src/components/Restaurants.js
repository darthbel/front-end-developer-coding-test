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
    this.handleClick = this.handleClick.bind(this)
  }

  // Setting the page's title
  componentDidMount() {
    document.title = 'Find Restaurants in Your City'
  }

  // method to fetch the data from the API
  fetchData(page) {
    this.setState({
      isLoading: true
    })
    fetch(
      'https://opentable.herokuapp.com/api/restaurants?city=' +
        this.state.cityName +
        '&page=' +
        page
    )
      // checking for bad requests
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          // isLoading is set to false, and no results are displayed
          this.setState({
            restaurantsData: null,
            totalRestaurants: null,
            totalPages: null,
            isLoading: false
          })
          // error message is displayed on the console
          throw Error(`Request rejected with status ${response.status}`)
        }
      })
      // in case of successful response, the information are stored in the states
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
      .catch(err => {
        console.error(err)
      })
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
      // not able to enter special characters
      [name]: value.replace(/[-!@#$%^&*()_|+=?;:",.<>]/gi, '')
    })
  }

  render() {
    return (
      <div className='container restaurants text-center'>
        {/* Search Component */}
        <SearchByCity
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          cityName={this.state.cityName}
        />
        {/* showResults is true once the Search Restaurants button is clicked */}
        {this.state.showResults &&
          // if the system is still fetching the results, isLoading = true
          // when it is done fetching, isLoading = false, and the results are displayed
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
                // if 0 results, the following message will be displayed
                <div>No restaurants found</div>
              )}
            </div>
          ))}
        {/* if more than one page, the navigation page buttons are displayed */}
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
