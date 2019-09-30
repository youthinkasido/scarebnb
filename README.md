# [Scarebnb](https://scarebandb.herokuapp.com/#/)

Scarebnb is a Haunted house experience web app, inspired by Airbnb, built with **Rails, React, Redux, PostgreSQL and AWS**	 

## FEATURES


**Spot Gallery**
Listings are rendered to the user based on their selected city using regular expressions.

```javascript function searchingFor(term) {
  return function (cityInList) {
    return cityInList.name.toLowerCase().includes(term.toLowerCase()) || !term
  }
}
```

![Home Page](https://www.awesomescreenshot.com/upload//1054043/dded00a8-a19b-4f87-5aa9-0b360e70eb26.png)


 **User Authentication**
Users can rest assured that there account information is safe
using password encryption.

![Home Page](./signup.png)

```javascript
  def create 
    @user = User.find_by_credentials(
      params["user"]["email"], 
      params["user"]["password"]
      )
    if @user
      login(@user) 
      render 'api/users/show' # sends users show json 
    else
      render json: ["Invalid Credentials"], status: 401
      
    end
  end
```

- **Booking a spot**
Users can book a spot by selecting a start and end date, as well as the number of 
guests they plan to bring, through the utilization of the react-date-picker dependency

```javascript
<DayPickerInput
      orientation={"vertical"}
      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  />
```


![Home Page](./spotshowpage.png)

Leave a Review for a spot:
Users get a chance to share their experiences with other potential bookers,
for better or for worse!






