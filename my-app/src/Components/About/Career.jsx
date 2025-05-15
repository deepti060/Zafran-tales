import React, { useState } from "react";
import "./Career.css";

const jobPosts = [
  {
    id: 1,
    title: "Marketing Manager",
    company: "Coca-Cola Bottling Co.",
    location: "Patia, Bhubaneswar",
    description: "Drive marketing campaigns and brand strategy for Coca-Cola products in regional markets.",
  },
  {
    id: 2,
    title: "Restaurant Receptionist",
    company: "Zafran Tales",
    location: "Patia, Bhubaneswar",
    description: "Manage front desk responsibilities, greet customers, and handle reservations with a friendly attitude.",
  },
  {
    id: 3,
    title: "Head Chef / Cook",
    company: "Zafran Tales",
    location: "Patia, Bhubaneswar",
    description: "Prepare and supervise meals with a focus on high-quality ingredients and hygiene standards.",
  },
  {
    id: 4,
    title: "Distribution Assistant",
    company: "PureDrop Water Bottles",
    location: "Patia, Bhubaneswar",
    description: "Coordinate logistics and distribution of bottled water for retail and wholesale partners.",
  },
  {
    id: 5,
    title: "Sales Executive",
    company: "Coca-Cola Regional Office",
    location: "Patia, Bhubaneswar",
    description: "Engage with local vendors and outlets to promote Coca-Cola products and boost regional sales.",
  },
  {
    id: 6,
    title: "Assistant Chef",
    company: "Zafran Tales",
    location: "Patia, Bhubaneswar",
    description: "Assist the head chef in preparing local and continental cuisine while maintaining kitchen hygiene.",
  },
];

const Career = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setForm({ name: "", email: "", role: "", message: "" });
  };

  return (
    <div className="career-container">
      <header className="career-header">
        <h1>Join Our Team</h1>
        <p>Explore career opportunities with Coca-Cola, restaurants, and water bottle brands.</p>
      </header>

      <section className="job-list">
        {jobPosts.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="application-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select name="role" value={form.role} onChange={handleChange} required>
            <option value="">Select Position</option>
            {jobPosts.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title} - {job.company}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us why you're a great fit"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default Career;
