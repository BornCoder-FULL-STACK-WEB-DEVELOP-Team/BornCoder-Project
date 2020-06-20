import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './TaskDetail.module.scss';

class TaskDetail extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { detail } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.taskDetail}>
          <div className={styles.taskHeader}>
            <div className={styles.detailPanel}>
              <div className={styles.stepBarHolder}>
                <span className={styles.stepBarActive}>
                  <span className={`${styles.stepBar__text} ${styles.stepBar__textActive}`}>Open</span>
                </span>
                <span className={styles.stepBarDisabled}>
                  <span className={`${styles.stepBar__text} ${styles.stepBar__textDisabled}`}>Assigned</span>
                </span>
                <span className={styles.stepBarDisabled}>
                  <span className={`${styles.stepBar__text} ${styles.stepBar__textDisabled}`}>Completed</span>
                </span>
              </div>
              <h1 className={styles.taskTitle}>{detail.title}</h1>
              <div className={styles.postedDetailHolder}>
                <div className={styles.postedDetailPerson}>
                  <div className={styles.avatar}>
                    <img className={styles.avatarImg} alt="" src="https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg"></img>
                  </div>
                  <div className={styles.personNameWrapper}>
                    <div className={styles.detailHolder__smallTitle}>Posted by</div>
                    <span>Simone W.</span>
                  </div>
                  <div className={styles.smallTime}>
                    <time>15 mins ago</time>
                  </div>
                </div>

                <div className={styles.postedDetailLocation}>
                  <div className={styles.detailHolder__icon}>
                    <FontAwesomeIcon size="lg" icon={faMapMarkerAlt} />
                  </div>

                  <div className={styles.locationInformation}>
                    <p className={styles.detailHolder__smallTitle}>Location</p>
                    <p className={styles.detailHolder__text}>{detail.location}, Australia</p>
                  </div>
                </div>

                <div className={styles.postedDetailDate}>
                  <div className={styles.detailHolder__icon}>
                    <FontAwesomeIcon size="lg" icon={faCalendarAlt} />
                  </div>

                  <div>
                    <p className={styles.detailHolder__smallTitle}>Due Date</p>
                    <p className={styles.detailHolder__text}>Tuesday, 16th Jun 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailSidebar}>
              <div className={styles.paymentPanel__wrapper}>
                <div className={styles.paymentPanel__title}>Task Budget</div>
                <div className={styles.paymentPanel__priceWrapper}>
                  <div className={styles.paymentPanel__price}>
                    <span>${detail.price}</span>
                  </div>
                </div>
                <div className={styles.paymentPanel__btnWrapper}>
                  <button className={styles.paymentPanel__btn}>Make an offer</button>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.taskDescription}>
            <div className={styles.section__title}>Details</div>
            <div className={styles.description__content}>
              1) Kitchen cardboard door needs to be reattached after pulling out from the chipboard.
              2) Remove my (very dodgy) attempt at Clauking the kitchen sink and reapply.
            </div>
          </div>

          <div className={styles.offersSection}>
            <div className={styles.section__title}>Offers</div>
            <div className={styles.offersSectionContent}>
              <div>
                <p className={styles.offersImg}>
                  <img src="https://www.airtasker.com/images/waiting-for-offers.png" alt=""/>
                </p>
                <button className={styles.offersSection__btn}>Make an offer</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default TaskDetail;