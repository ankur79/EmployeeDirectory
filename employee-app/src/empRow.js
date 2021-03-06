import React from 'react';
import PropTypes from 'prop-types';

const empRow = ({empInfo, toggleView}) => {
    return (<div className="empRow">
                <div>{empInfo.first_name}</div>
                <div>{empInfo.last_name}</div>
                <div>{empInfo.email}</div>
                <div><a  onClick={() => toggleView(empInfo)}>Edit</a></div>
                <div><a href="">Delete</a></div>
                {
                    /*<div><Link to={`edit/${empInfo.id}`}>Edit</Link></div>
                        <div><a href="/">Delete</a></div>*/
                }
            </div>)
}

empRow.propTypes = {
    empInfo: PropTypes.object,
    toggleView: PropTypes.func
}

export default empRow;
