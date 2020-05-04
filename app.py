from flask import Flask, render_template, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import pickle
import joblib

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/find_music_1')
def question_1():
    

    return render_template("find_music_1.html")

@app.route('/result', methods=["GET", "POST"])
def prediction_result():
    spotify_df = pd.read_csv("./data/spotify_data_v3.csv")

    # Extract the necessary columns we need for machine learning model
    spotify_df_clean = spotify_df[[
        'genre', 'genre_label', 'danceability', 'energy', 'acousticness',  
        'instrumentalness', 'valence', 'speechiness', 'loudness','tempo'
    ]]
    
    # Assign X (data) and y (target)
    X = spotify_df_clean.drop(["genre", "genre_label"], axis=1)
    y = spotify_df_clean["genre_label"]
    
    # Create train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

    # Create a MinMaxScaler model and fit it to the training data
    X_scaler = MinMaxScaler().fit(X_train)

    # Transform the training and testing data using the X_scaler
    X_train_scaled = X_scaler.transform(X_train)
    X_test_scaled = X_scaler.transform(X_test)

    # Load the ML model
    model = open('spotify_ML_model.pkl','rb')
    spotify_model = joblib.load(model)

if __name__ == '__main__':
    app.run(debug=True)