import styles from './EventList.module.css';

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <h2>
            {index} - {item.title}
          </h2>
          <p>
            Place: {item.location}
            <br />
            Date: {item.date}
          </p>
          <button onClick={() => handleClick(item.id)}>Delete item</button>
        </div>
      ))}
    </div>
  );
}
