import React from "react";
import "./style.css";

export default function Modal({ show, onClose, body, title, ...rest }) {
  return show ? (
    <div id={rest.id}>
      <div className="modal_backdrop"> h</div>
      <section className="modal_block">
        <div className="modal_header">
          {title && (
            <h1
              style={{
                padding: "0",
                margin: "0",
                color: "rgb(69,123,233)",
              }}
            >
              {title}
            </h1>
          )}
          <span className="modal_close" onClick={onClose}>
            X
          </span>
        </div>
        {body && <div className="modal_body">{body}</div>}
      </section>
    </div>
  ) : null;
}
