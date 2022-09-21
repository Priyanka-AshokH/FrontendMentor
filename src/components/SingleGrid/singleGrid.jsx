import styles from "./singleGrid.module.css";

function SingleGrid() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.joinGrid}>
        <h4>Join our community</h4>
        <p>Join our community 30-day, hassle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews.
        </p>
        <p>
          Perfect for any developers who are serious about honing their skills.{" "}
        </p>
      </div>
      <div>
        <h4>Monthly Subscription</h4>
        <p>$29</p>
        <span>per month</span>
        <p>Full access for less than $1 a day </p>
        <button>Sign Up</button>
      </div>
      <div>
        <h4>Why us</h4>
        <p>
          Tutorials by industry experts Peer & expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
    </div>
  );
}
export default SingleGrid;
