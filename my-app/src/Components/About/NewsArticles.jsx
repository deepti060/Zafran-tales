import React from "react";
import "./NewsArticles.css";

const articles = [
  {
    date: "13 Apr 2025",
    title: "Local Restaurants Thrive with Gourmet Food Trends",
    content:
      "Gourmet dining is gaining popularity among food lovers, driving a surge in reservations across local restaurants. Chefs are introducing seasonal ingredients and creative plating to attract patrons, helping small businesses compete with larger chains. This trend has also led to a rise in demand for food photography and social media marketing in the food industry.",
    image: "/art1.jpg",
    comments: 2,
  },
  {
    date: "25 Apr 2025",
    title: "Coca-Cola Expands Its Bottle Business with Restaurant Partnerships",
    content:
      "Coca-Cola has announced new distribution partnerships with regional restaurants, increasing its presence through branded bottle packaging. These collaborations aim to deliver fresh beverages in recyclable bottles while promoting sustainability. Coca-Cola's strategy includes offering exclusive flavors and bundle deals to restaurants.",
    image: "/art2.jpg", 
    comments: 1,
  },
];

const NewsArticles = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <p className="sub-title">Recent News</p>
        <h2 className="main-title">News & Articles</h2>
      </div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt="News" className="article-image" />
            <div className="article-content">
              <span className="article-date">{article.date}</span>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-text">{article.content}</p>
              <div className="article-footer">
                <span>By Admin</span>
                <span>{article.comments} Comment{article.comments !== 1 ? "s" : ""}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsArticles;
