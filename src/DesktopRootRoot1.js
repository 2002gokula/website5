import React from "react";
import clsx from "clsx";
import styles from "./DesktopRootRoot1.module.css";

export const DesktopRootRoot1 = ({ variant = "default" }) => {
  const DesktopRootRootRootFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <div className={clsx(styles.desktopRootRootRoot)}>
      <div
        className={clsx(
          styles.bg,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.flexColumn}>
          <div className={styles.flexColumn1}>
            <div className={styles.text1}>A Made in India Initiative</div>
            <div className={styles.paragraph}>
              Efficient and Effiective <br />
              Laser Weeding Robots
            </div>
          </div>
          <div className={styles.flexRow}>
            <img
              src={`https://file.rendit.io/n/9EOOpieGtUDAPscyyiiP.png`}
              className={styles.image2}
            />
            <div className={styles.text2}>+</div>
            <img
              src={`https://file.rendit.io/n/wxv0D88N9urQjWZQjw15.png`}
              className={styles.image3}
            />
            <div className={styles.text3}>=</div>
            <img
              src={`https://file.rendit.io/n/ufW6RCthgqVOfbV2iGVz.png`}
              className={styles.image1}
            />
          </div>
          <div className={styles.flexColumn2}>
            <div className={styles.heading}>
              <div className={styles.captionHeader}>
                <div className={styles.paragraph1}>
                  Precision Laser Weed Elimination combined with robotics
                  platform by targeting individual weed detection by deep
                  learning models.
                  <br />
                </div>
              </div>
            </div>
            <div className={styles.text4}>Get notified when we launch!</div>
          </div>
          <div className={styles.textField}>
            <div className={styles.inputContainer}>
              <div className={styles.placeholder}>Email</div>
            </div>
          </div>
          <div className={styles.text5}>Stay tuned for something amazing</div>
        </div>
        <div className={styles.flexColumn3}>
          <div className={styles.socialIcons}>
            <img
              src={`https://file.rendit.io/n/0C0d5ALDyvYW2xKC3ZTT.svg`}
              className={styles.iconsTwitter}
            />
            <img
              src={`https://file.rendit.io/n/3ZpQtjWoEKlECXqSwE84.svg`}
              className={styles.iconsTwitter}
            />
          </div>
          <div className={styles.paragraph2}>
            © Copyrights Harvested Labs | All Rights Reserved
          </div>
        </div>
      </div>
      <img
        src={`https://file.rendit.io/n/9RQqEKJs1w5vbNYlx7pA.svg`}
        className={clsx(
          styles.ellipse,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      />
      <div
        className={clsx(
          styles.saaSLandingPage,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.navigation}>
          <div className={styles.flexColumn4}>
            <div className={styles.menus} />
            <div className={styles.flexRow1}>
              <img
                src={`https://file.rendit.io/n/Pr9py9GyaoRFXE1siKRq.png`}
                className={styles.picture}
              />
              <div className={styles.tryNowContact}>
                <div className={styles.flexRow2}>
                  <div className={styles.text6}>Coming Soon</div>
                  <div className={styles.text7}>Contact Us</div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={`https://file.rendit.io/n/H3mhcXV0EY68b6y40nOC.svg`}
            className={styles.divider}
          />
        </div>
      </div>
      <div
        className={clsx(
          styles.loadingSpinner,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      />
      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang, {
          [styles.error]: variant === "error"
        })}
      />
    </div>
  );
};
