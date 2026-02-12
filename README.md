# NetFlix 

1. Create react application using VITE. 
2. Installing tailwind css for VITE and configuring that in vite.config.ts
3. Header
4. Routing of App
5. Login form
6. Sign Up form
7. useRef hook
8. Firebase setup
9. Deploying our app to production
10. Create SignUp user account
11. Implement user sign-in API
12. Created Redux store with userSlice
13. Implemented Sign out
14. Update Profile
15. Unsubscribed to the onAuthStateChanged callback
16. Register TMDB API & Create an Access token
17. Get data from the now playing movies API. 
18. Update the store with movies data (Movie slice)
19. Planning for Main container & Secondary container
20. Fetch data for Trailer video
21. Embedded the youtube video and make it autoplay and mute
22. TMDB Image CDN URL
23. GPT search implementation
24. Multi-language feature in our app

# Features

- Login/ Sign Up
  - Sign In/ Sign up form
  - redirect to browse page

- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie Lists * N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
   
# firebase deployment

- Install firebase CLI - `npm install -g firebase-tools`
- Firebase Login - `firebase login`
- Initialize Firebase - `firebase init`, then select Hosting
- Deploy command - `firebase deploy`

# TMDB Integration

- Go to the TMDB website - https://www.themoviedb.org/
- Sign up/ Login here
- Go to Edit profile and Click API
- Generate New API key (Enter mandatory details for registering there)
- API References - Click MOVIE LISTS
