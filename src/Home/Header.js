import React, { useState, useRef } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/Header.module.css";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "../css/Alert.css";
import AuthModal from "../Auth/Auth";

const Header = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <header className={styles.AppHeader}>
      <div className={styles.logoPosition}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <Container>
          {showButton && (
            <Button
              onClick={() => setShowMessage(true)}
              className="buttonDebug"
            >
              Debug
            </Button>
          )}

          <CSSTransition
            in={showMessage}
            nodeRef={nodeRef}
            timeout={400}
            classNames="alert"
            unmountOnExit
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
          >
            <Alert
              ref={nodeRef}
              variant="primary"
              dismissible
              className="alertwindow"
              onClose={() => setShowMessage(false)}
            >
              <Alert.Heading>Переход в окно Debug</Alert.Heading>
              <p style={{ color: "#5BD88C" }}>
                Вы действительно хотите осуществить переход в Debug окно?
              </p>
              <Link
                className="transmitButton"
                onClick={() => setShowMessage(false)}
                to="/debug"
              >
                Перейти
              </Link>
            </Alert>
          </CSSTransition>
        </Container>

        <Link to="/">Головна</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contact" style={{ marginBottom: "10px" }}>
          Контакти
        </Link>
        <AuthModal />
      </div>
    </header>
  );
};

export default Header;
