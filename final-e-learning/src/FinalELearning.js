// src/HomePage.js
import React from 'react';
import './FinalELearning.css'; 

const FinalELearning = () => {

  const handleScroll = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth',
    });
  };

  return (
    <div className="final-elearning-container">
      {/* Main Content Area */}
      <main className="main-content">
        <section className="intro">
          <h1 className="intro-title">Welcome to Our E-Learning Platform</h1>
          <p className="intro-text">Explore our programming courses and track your progress in a fun and engaging way.</p>
        </section>

        {/* Course, Leaderboard, Quiz, Dashboard */}
        <section id="my-course" className="section">
          <h2 className="section-title">My Course</h2>
          <p className="section-text">Choose from a wide range of programming languages, including Python, C, C++, Java, and JavaScript. Each course offers lessons at beginner, intermediate, and advanced levels to suit your learning pace and skill development goals.</p>
        </section>
        <section id="leaderboard" className="section">
          <h2 className="section-title">Leaderboard</h2>
          <p className="section-text">Compete with fellow learners as you complete lessons and quizzes to earn points. Climb to the top of the leaderboard and showcase your progress in mastering new skills.</p>
        </section>
        <section id="quiz" className="section">
          <h2 className="section-title">Quiz</h2>
          <p className="section-text">Test your understanding with quizzes designed to reinforce key concepts. Quizzes are available for each lesson to help you gauge your knowledge and identify areas for improvement.</p>
        </section>
        <section id="dashboard" className="section">
          <h2 className="section-title">Dashboard</h2>
          <p className="section-text">Your personal dashboard provides a snapshot of your learning journey. Track completed lessons, quiz scores, and your current skill level as you progress through each course.</p>
        </section>
      </main>

     
    </div>
  );
};

export default FinalELearning;
