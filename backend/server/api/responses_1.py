import pandas as pd
import numpy as np
import json


def getBygenres(genre):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    res = movies_cleaned_df[movies_cleaned_df['genres'].str.contains(
        genre, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByyear(year):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    res = movies_cleaned_df[movies_cleaned_df['release_date'].str.contains(
        year, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByrating(rating):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    res = movies_cleaned_df[movies_cleaned_df['vote_average'].astype(
        str).str[0] == rating[0]]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByVotes():
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    movies_sortvote_df = movies_cleaned_df.sort_values(
        by=['vote_average', 'vote_count'], ascending=False)[movies_cleaned_df['vote_count'] > 100]
    res = movies_sortvote_df[:20]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByPopularity():
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    movies_sortpopularity_df = movies_cleaned_df.sort_values(
        by=['popularity'], ascending=False)
    res = movies_sortpopularity_df[:20]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getById(id):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    res = movies_cleaned_df[movies_cleaned_df['id'] == id]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getBy_genres_year_rating(genre, year, rating):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies_Dataset.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'runtime', 'production_companies', 'imdb_id'])
    a = movies_cleaned_df[movies_cleaned_df['genres'].str.contains(
        genre, na=False)]
    b = a[a['release_date'].str.contains(year, na=False)]
    res = b[b['vote_average'].astype(str).str[0] == rating[0]]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


# movies_cleaned_df.original_language.unique()
