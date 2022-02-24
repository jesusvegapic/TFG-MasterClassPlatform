import React from "react";

const Header = ({onclickAdd}) => (
    <div className="header-content">
        <div className="header-title-text" >Publicar conferencias</div>
        <input type="button" onClick={onClickAdd} value="Publicar conferencia"></input>
    </div>
);

Header.protoTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default React.memo(Header);