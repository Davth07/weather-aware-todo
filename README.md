Weather Aware Todo List

The weather aware todo list is an application that has tasks and displays the weather. The purpose of the app is to help users organise their tasks while having the real weather in mind. Users can for example get recommendations for their tasks depending on the weather.

To run this project you should clone this github repository and then open it in your terminal. Use "npm install" to install the necessities and fix a weatherApi key in a env file. Then start by running "npm run dev". 

The app uses three API's. User API, Todo API and Weather API. 
https://jsonplaceholder.typicode.com/users - Users
https://jsonplaceholder.typicode.com/todos - Todos
https://api.weatherapi.com/v1/current.json - Weather (key is hidden)

The User API gets the available users which is used in the user selector.

The Todo API gets the tasks belonging to each user and gives task titles, userId and if completed is true or false.

The Weather API gets the current weather information for the selected city from (Currently) a drop down menu (Stockholm, Gothenburg, Malmö. It gives information like temperature, feels like temperature, weather condition, weather code, wind speed, precipitation and weather icon.

The component structure is as suggested in classroom..:
src/
  components/
    todoItem.tsx -- Displays an individual task and completed checkbox.
    todoList.tsx -- Displays a list of the selected users tasks.
    userSelector.tsx -- Makes the user able to select a user.
    weatherDashboard.tsx -- Displays weather information.
    weatherRecommendation.tsx -- Displays recommendations for tasks based off current weather.
  services/ -- API's explained above.
    todoAPI.ts 
    userAPI.ts 
    weatherAPI.ts 
  types/
    models.ts -- Typescript types
  utils/
    weatherRules.ts
  App.css -- CSS (Design of the ap)
  App.tsx -- Main application
  main.tsx

Features: 

User selection with user specific tasks. Weather informations for three selectable cities. Weatherbased recommendations for tasks. Completed or Active checkbox. Filter for all, active or completed. Loading and error messages. 

Tests: 
☐ Load your data. Tested and works.

☐ No user selected: helpful prompt and no unrelated tasks. Tested and it shows "Select a user to see their tasks."

☐ Switch users: only the selected user’s tasks are shown. Tested and works (since I replaced tasks with 20 own made ones every user has the same, this could be changed by not changing the tasks or by adding 180 more.. so each user has their own..).

☐ Task API failure: error appears; weather can still display. Tested and error says user and todos can't load. Weather still displays.

☐ Weather API failure: tasks remain usable. Tested and tasks still work.

☐ Empty task list: meaningful empty-state message. Tested and displays "No tasks found.".

☐ Switch location: displayed weather matches the chosen location. Tested and works.

☐ Toggle completion: state changes without reloading. Tested and works. (Does not save, since no local storage or database.)

☐ Mobile viewport: controls remain usable without horizontal overflow. Tested and works.

☐ Keyboard: inputs, buttons and checkboxes are accessible. Tested and works.

Limitations: 

A limitation was the fact that the task API showed Lorem ipsum (Placeholder titles in latin that did not mean anything.) so therefore I couldn't accurately make seperate todo's for each user that still realistically had a category (Outdoor or indoor). 
The completion state is also not saved. 
There is no add task or add user, the app is completely reliant on the API.
No input field to search any city. There is three to select between.
Recommendations are currently only for a few amount of weather conditions.

Possible improvements: 

Adding localstorage or a database to save tasks and task changes.
Adding creating and deleting tasks.
Adding sorting tasks, searching tasks.
Adding weather for more days than just the current weather.
Adding a input field for city instead of a dropdown menu.
Adding a dropdown menu to change category for tasks.
