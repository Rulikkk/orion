import styles from "./PriceTable.module.css";

export default ({ headers, children }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <td>{headers[0]}</td>
        <td>{headers[1]}</td>
      </tr>
    </thead>
    <tbody>
      {children.map((child, index) => (
        <tr className={styles.banded} key={index}>
          <td>{child[0]}</td>
          <td>
            <span>{child[1]}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
