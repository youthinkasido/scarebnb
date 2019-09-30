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

- **Booking a spot**
Users can book a spot by selecting a start and end date, as well as the number of 
guests they plan to bring.

![Home Page](./spotshowpage.png)

Leave a Review for a spot:
Users get a chance to share their experiences with other potential bookers,
for better or for worse!






