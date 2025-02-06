# RealTime-Device_Tracking-App
The Real-Time Device Tracking App enables multiple users to track each other's live locations on a map in real-time. Using Socket.IO for real-time communication and Leaflet.js for interactive maps, users can visualize the location of others, calculate distances between users, and see real-time updates.


Tracking Location: The app uses the browser's Geolocation API to get the user's location and share it with other connected users via Socket.IO.

Displaying Locations: Once the server receives location data, it broadcasts the information to all connected clients. On the frontend, Leaflet.js is used to plot the user’s position on a map using markers.

Distance Calculation: The app uses the Haversine formula to calculate the distance between two users based on their latitude and longitude.

User Movement and Updates: As the user's location changes (tracked in real-time), the app updates the markers on the map accordingly.

User Disconnection: When a user disconnects, the app automatically removes the user's marker from the map.
