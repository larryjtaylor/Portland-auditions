import React from "react";
import Audition from "./Audition";
import PropTypes from "prop-types";

function AuditionList(props) {


  return (
    <div>
      {props.auditionList.map((audition, index) =>
        <Audition date={audition.date}
                showName={audition.showName}
                director={audition.director}
                description={audition.description}
                url={audition.url}
                key={index}
                id={audition.id}
                currentRoute={props.currentRoute}
                handleClosingAudition={props.handleClosingAudition}/>
      )}
    </div>
  );
}

AuditionList.propTypes = {
  auditionList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string,
  handleClosingAudition: PropTypes.func
};

export default AuditionList;
