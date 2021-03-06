import React from "react";
import { connect } from "react-redux";
import { setSuccess } from "../contact-details/contact-details-actions";
import "./message.css";

export const Message = props => (
  <div className={`message message-${props.type} ${props.actionSuccess ? "show" : "hide"}`}>
    <div onClick={() => props.setSuccess(false)} className="message-close">x</div>
    <h4>{props.content}</h4>
    <textarea className="message-contact" disabled value={JSON.stringify(props.contact)}/>
  </div>
);

const mapStateToProps = state => ({
  actionSuccess: state.actionSuccess
})

export default connect(mapStateToProps, { setSuccess })(Message);
