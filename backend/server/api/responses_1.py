import pandas as pd
import numpy as np
import json


def getBygenres(genre):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    res = movies_cleaned_df[movies_cleaned_df['genres'].str.contains(
        genre, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByyear(year):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    res = movies_cleaned_df[movies_cleaned_df['release_date'].str.contains(
        year, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByrating(rating):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    res = movies_cleaned_df[movies_cleaned_df['rating'].astype(
        str).str[0] == rating[0]]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByVotes():
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    movies_sortvote_df = movies_cleaned_df.sort_values(
        by=['rating', 'vote_count'], ascending=False)[movies_cleaned_df['vote_count'] > 100]
    res = movies_sortvote_df[:20]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByPopularity():
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    movies_sortpopularity_df = movies_cleaned_df.sort_values(
        by=['popularity'], ascending=False)
    res = movies_sortpopularity_df[:20]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getById(id):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    print(id)
    i = int(str(id))
    res = movies_cleaned_df[movies_cleaned_df['id'] == i]

    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getBy_genres_year_rating(genre, year, rating):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    a = movies_cleaned_df[movies_cleaned_df['genres'].str.contains(
        genre, na=False)]
    b = a[a['release_date'].str.contains(year, na=False)]
    res = b[b['rating'].astype(str).str[0] == rating[0]]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getBy_genres_year_rating(genre, year, rating):
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")
    movies_cleaned_df['description'] = movies_cleaned_df['description'].str.lower()
    title = title.lower()
    res = movies_cleaned_df[movies_cleaned_df['description'].str.contains(
        title, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed

# movies_cleaned_df.original_language.unique()
