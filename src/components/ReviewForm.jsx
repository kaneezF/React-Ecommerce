import { useState } from "react";
import "./ReviewForm.css";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({product}) {
  const [formData, setFormData] = useState({
    rating: 0,
    review: "",
    name: "",
    email: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRating = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>
        Write your Review for <span>"{product.name}"</span>
      </h3>
      <p>Your email address will not be published. Required fields are marked *</p>

      {/* Rating */}
      <label>Your rating *</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={formData.rating >= star ? "star filled" : "star"}
            onClick={() => handleRating(star)}
          >
            <FaStar size={30}/>
          </span>
        ))}
      </div>

      {/* Review Textarea */}
      <label>Your review *</label>
      <textarea
        name="review"
        value={formData.review}
        onChange={handleChange}
        required
      />

      {/* Name and Email */}
      <div className="row">
        <div className="col">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Save Info */}
      <label className="checkbox">
        <input
          type="checkbox"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
        />
       Subscribe to our newsletter.
      </label>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}
