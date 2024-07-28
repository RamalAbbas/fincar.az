import styles from "./ChangePassword.module.css";

const ChangePassword = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.head_title}>Change password</p>

      <div className={styles.content}>
        <p className={styles.description}>
          To change your password, please fill in the fields below.<br></br>{" "}
          Your password must contain at least 8 characters, it must also include
          at least <br></br>one upper case letter, one lower case letter, one
          number and one special<br></br> character.
        </p>

        <div className={styles.change_password_form}>
          <div className={styles.error_item}>
            <label htmlFor="current_pass">Current password</label>
            <input id="current_pass" type="text" />
            <label>Error text</label>
          </div>

          <div className={styles.item}>
            <label htmlFor="new_pass">New password</label>
            <input id="new_pass" type="text" />
          </div>

          <div className={styles.item}>
            <label htmlFor="re_enter_pass">Re-enter password</label>
            <input id="re_enter_pass" type="text" />
          </div>

          <div className={styles.form_end}>
            <button>
                Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
