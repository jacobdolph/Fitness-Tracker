## Project title
Git Buff Academy

## Motivation
Built a workout tracker to help reach my fitness goals quicker.
 
## Demo
Homepage:
![GitHub Logo](/public/images/fitnessTrackerDash.png)
Dashboard with Graphs
![GitHub Logo](/public/images/FitnessTrackerDash2.png)
Adding New Exercise
![GitHub Logo](/public/images/fitnessTrackerDash3.png)
Adding The Exercise
![GitHub Logo](/public/images/fitnessTrackerDash4.png)
Mobile View

![GitHub Logo](/public/images/fitnessTrackerDashMobile.png)

## Tech

<b>Built with</b>
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- JavaScript
- [Express](https://expressjs.com/)
- NPM
    * mongojs
    * mongoose
    * morgan


## Features
- A fun piece of this app was building the backend api to utilize CRUD operations in mongoDD. Setting up the workout.js schema for our models to keep our documents stored consistently was a consideration I needed to think about.
- The other cool thing this app does is that as it continues to store data, when we look GET data for our dashboard we will only serve up data from the current week.
### Future Development
- I plan on implementing the use of IndexedDB for offline use that will update the database when back online.


## How to use?
- navigate to the [GitbuffApp](https://stormy-everglades-49849.herokuapp.com/)
- To start click on New Workout
- Select the exercise you would like to add.
- click on complete to return back to the homepage or, add exercise to add another exercise to the workout.
- back on the homepage, you can click on continue workout to add more exercises to the workout.
- To see a Dashboard of completed workouts, click on Dashboard.
- From here you can see what workouts you have completed since sunday and will start over on saturday.
- the view includes total workout duration in minutes, duration of each exercise performed, total weight lifted, and total weight lifted per exercise.


MIT © [Jacob Dolph](https://github.com/jacobdolph)