import css from "../Feedback/Feedback.module.css"


const Feedback = ({goodCount, neutralCount, badCount, totalFeedback, stats}) => {
    return(
        <div>
            <ul className={css.list}>
                <li>Good: {goodCount}</li>
                <li>Neutral: {neutralCount}</li>
                <li>Bad: {badCount}</li>
                <li>Total Feedback: {totalFeedback}</li>
                <li>Positive: {stats}%</li>
            </ul>
        </div>
    )
}

export default Feedback;