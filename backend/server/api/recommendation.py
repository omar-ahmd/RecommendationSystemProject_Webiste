import json
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction import text
from sklearn.metrics.pairwise import sigmoid_kernel


def getRecommendations(i):
    id = int(str(i))
    movies_cleaned_df = pd.read_csv(
        "/media/omar/My Files/Programming/WebApp cours/Project/Rainmaker-RecommendationSystem-Project/backend/Movies_Dataset.csv")

    # tfv = TfidfVectorizer(min_df=3,  max_features=None,
    #                      strip_accents='unicode', analyzer='word', token_pattern=r'\w{1,}',
    #                      ngram_range=(1, 3),
    #                      stop_words=stop_wordss)
    my_additional_stop_words = ['id', 'name', 'poster_path',
                                'backdrop_path', 'credit_id', 'profile_path', 'order', 'gender']

    stop_wordss = text.ENGLISH_STOP_WORDS.union(my_additional_stop_words)

    cv = CountVectorizer(lowercase=True, min_df=3,  max_features=None,
                         strip_accents='unicode', analyzer='word', token_pattern=r'\w{1,}',
                         ngram_range=(1, 3),
                         stop_words=stop_wordss)

    movies_cleaned_df['Output'] = movies_cleaned_df['Output'].fillna('')

    vectorized = cv.fit_transform(movies_cleaned_df['Output'])

    # Fitting the TF-IDF on the 'overview' text
    #tfv_matrix = tfv.fit_transform(movies_cleaned_df['Output'])

    #sig = sigmoid_kernel(tfv_matrix, tfv_matrix)
    sig2 = sigmoid_kernel(vectorized, vectorized)

    # Reverse mapping of indices and movie titles
    indices = pd.Series(movies_cleaned_df.index,
                        index=movies_cleaned_df['id']).drop_duplicates()

    def give_rec(id, sig):
        # Get the index corresponding to original_title
        idx = indices[id]

        # Get the pairwsie similarity scores
        sig_scores = list(enumerate(sig[idx]))

        # Sort the movies
        sig_scores = sorted(sig_scores, key=lambda x: x[1], reverse=True)

        # Scores of the 10 most similar movies
        sig_scores = sig_scores[1:19]

        # Movie indices
        movie_indices = [i[0] for i in sig_scores]

        # Top 10 most similar movies
        return movies_cleaned_df.iloc[movie_indices]

    # Testing our content-based recommendation system with the seminal film Spy Kids
    #movies = give_rec(id=id, sig=sig)
    cvmovies = give_rec(id=id, sig=sig2)
    cvmovies = cvmovies.drop(
        columns=['Output'])
    # print(movies)
    # print(cvmovies)

    result = cvmovies.to_json(orient="records")
    parsed = json.loads(result)
    #json.dumps(parsed, indent=4)

    return parsed
