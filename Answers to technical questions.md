# Answers to technical questions

### 1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Around 14 hours. I would enhance the layout, try new color palettes, and definitely test it more to find more defects and ways to improve it.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

For JavaScript, that is a lot that was new for me when I was learning ES6 (although not so new), as ternary operators:

```javascript
{/* if there are more than 0 results, the results will be displayed */}
              {this.state.totalRestaurants > 0 ? (
                this.state.restaurantsData.map(restaurant => (
                  <Restaurant
                    className=''
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                ))
```

And arrow functions:

```javascript
// in case of a successful response, the information are stored in the states
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
```

And React is pretty new for me, so I'm learning a lot of everyday.

### 3. How would you track down a performance issue in production? Have you ever had to do this?

I've never tracked performance issues, but I know that a lot of performance monitoring tools exists for these cases. With these tools, it's easier to tell if the performance issue is coming from a crash, or maybe a bug, or even weak hardware. I would probably start by searching for a good tool and then investigate the root cause using it.

### 4. How would you improve the API that you just used?

By inserting more configuration fields such as results per page. Make it more customizable would be good.

### 5. Please describe yourself using JSON.

```json
{
  "name": "Felipe",
  "lastname": "Belgine",
  "age": 27,
  "nationality": "Brazilian",
  "livesin": "Canada",
  "passions": ["Programming", "Games", "Travelling"],
  "dreams": [
    "To become a successfull software developer",
    "Know as many places as I can"
  ],
  "languages": ["English", "Portuguese"],
  "professionalinfo": {
    "currentjob": "Server",
    "dreamjob": "Front End Developer",
    "skills": [
      "ReactJS",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "Git",
      "NoSQL",
      "SQL"
    ]
  }
}
```
