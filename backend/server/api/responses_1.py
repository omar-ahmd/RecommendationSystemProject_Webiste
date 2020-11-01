import pandas as pd
import numpy as np
import json


def getBygenres(genre):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'popularity', 'production_companies'])
    res = movies_cleaned_df[movies_cleaned_df['genres'].str.contains(
        genre, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByyear(year):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'popularity', 'production_companies'])
    res = movies_cleaned_df[movies_cleaned_df['release_date'].str.contains(
        year, na=False)]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed


def getByrating(rating):
    movies_cleaned_df = pd.read_csv(
        "D:\\Internship\\TEC\\Project\\backend\\Movies.csv")
    movies_cleaned_df = movies_cleaned_df.drop(
        columns=['Unnamed: 0', 'Output', 'keywords', 'popularity', 'production_companies'])
    res = movies_cleaned_df[movies_cleaned_df['vote_average'].astype(
        str).str[0] == rating[0]]
    result = res.to_json(orient="records")
    parsed = json.loads(result)
    return parsed

# movies_cleaned_df.original_language.unique()
