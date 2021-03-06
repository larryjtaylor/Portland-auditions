import React from "react";
import Audition from "./Audition";
import PropTypes from "prop-types";

function AuditionList(props) {

  var listStyle = {
    marginLeft: "2%",
    display: "grid",
    gridTemplateColumns: "26% 26% 26%",
    girdTemplateRows: "10%",
    gridGap: "5px"
  };
  return (
    <div  style={listStyle}>
      {props.auditionList.map((audition, index) =>
        <Audition date={audition.date}
                company={audition.company}
                showName={audition.showName}
                director={audition.director}
                description={audition.description}
                showType={audition.showType}
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
