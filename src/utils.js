import axios from "axios";

const connectNewsApi = axios.create({
  baseURL: "https://nadias-nc-news.herokuapp.com/api",
});

export const getAllArticles = (topic) => {
  return connectNewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getTopics = () => {
  return connectNewsApi.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticlesByTopicId = (topic) => {
  return connectNewsApi.get(`/articles?topic=${topic}`).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return connectNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.articles;
  });
};

export const getCommentByArticleId = (article_id) => {
  return connectNewsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};



