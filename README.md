# Netflix GPT

- create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef hook
- Firebase setup
- deploying our app to production
- Create SignUp User Account
- Implement SignIn User API
- Created Redux store with user slice
- Implemented Sign out
- Update Profile
- Bug Fix - user cant change route from browser ie. from /login he cant write /browse on browser and vice versa and this is handled in a place which will be triggered only when user will have a signin, signup, signout triggers and then only change the route
ie. if the user is not logged in Redirect /browse to Login Page and vice-versa
- Bug Fix - Sign up user displayName and profile picture update
- Fetch from TMDB Movies
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Planning for MainContainer & Secondary Container Browse Page UI Design:    
    - MainContainer
        - video background
        - video title
    - Secondary Container
        - MovieList * n
            - Cards * n
- Custom Hook for now playing Movies
- Create movieSlice
- Updated store with Movie data
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded te Youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome


# Features
- Login/Sign Up
    - Sign In/Sign up form
    - redirect to Browse Page
- Browser (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions
