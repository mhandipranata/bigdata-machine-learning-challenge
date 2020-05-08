# Machine Learning using Spotify API

Spotify has python library called 'Spotipy' where we can use to extract songs/tracks, albums, playlist, artist, etc. in Spotify API.
</br>

## Idea Overview

Using user interaction, we will ask a few questions to the user to receive their interests on what kind of songs they want to listen to. From the data we extracted from Spotify API, we train the model using machine learning and model will then predict the songs and give song recommendation to the user that he/she might be interested in.
</br>
</br>

<b> Steps: </b>
1. Extract Songs/Tracks Data from Spotify API (Spotipy) by Genres
2. Clean The Collected Data and Consolidate All Different Genres CSVs into One CSV
3. Create A Training and Testing Machine Learning Model and Decide The Best Model with Highest Accuracy
4. Build Flask App to Run Machine Learning and Make Prediction
5. Create JavaScript Code to Extract Data from User Choices and Passed Data to Flask
6. Build Website for User Interaction
</br>

### 1. Extract Songs/Tracks Data from Spotify API (Spotipy) by Genres

Spotify built a Python Library to extract Spotify data (e.g. songs/tracks, albums, playlists, artists, etc.) from Spotify API. The library is called 'Spotipy'. 

</br>
https://github.com/plamere/spotipy
</br>

Similar to general API, we do need the credentials to access Spotify API, which we can get from Spotify for Developer page.
</br>
https://developer.spotify.com/dashboard/login
</br>

Using jupyter notebook, we call and pull the list of tracks from each of these 7 genres from Spotipy:
1. Pop
2. Hiphop
3. Rock
4. Jazz
5. Kpop
6. Intrumental
7. ASMR

