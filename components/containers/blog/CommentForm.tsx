const CommentForm = () => {
  return (
    <form action="#" className="comment-form">
      <div className="single-form-input">
        <textarea placeholder="Type your comments...."></textarea>
      </div>
      <div className="single-form-input">
        <input type="text" placeholder="Type your name...." />
      </div>
      <div className="single-form-input">
        <input type="email" placeholder="Type your email...." />
      </div>
      <div className="single-form-input">
        <input type="text" placeholder="Type your website...." />
      </div>
      <button className="theme-btn center" type="submit">
        <span>Post Comment</span> <i className="far fa-long-arrow-right"></i>
      </button>
    </form>
  );
};

export default CommentForm;
