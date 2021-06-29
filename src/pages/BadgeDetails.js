import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import confLogo from "../images/platziconf-logo.svg";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import "./styles/BadgeDetails.css";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;

  return (
    <div>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='ConfLogo' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jotTitle={badge.jotTitle}
              email={badge.email}
              twitter={badge.twitter}
            />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className='btn btn-primary mr-15'>
                  Increase Count: {count}
                </button>

                <Link
                  className='btn btn-primary'
                  to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>

              <div>
                <button
                  onClick={props.onOpenModal}
                  className='btn btn-danger mt-3 '>
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
