import styles from "./notification.module.css";

interface NotificationProps {
  title: string;
  message: string | null;
  status: string;
}

const Notification = ({ title, message, status }: NotificationProps) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = styles.success;
  }

  if (status === "rejected") {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
