import CustomCheckBox from "../../shared/CustomCheckBox/CustomCheckBox";
import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import useDropDownHook from "../../shared/hooks/useDropDownHook";

import fields from "./initialFields";

import css from "./DropDown.module.scss";

const DropDown = ({ fiterUsers, handleCheck }) => {
  const { isOpen, toggleOpen } = useDropDownHook();
  return (
    <>
      <div className={isOpen ? css.dropDown : `${css.dropDown} ${css.hidden}`}>
        <ul className={css.dropDown_list}>
          <li>
            <CustomCheckBox
              {...fields.showAll}
              checked={fiterUsers}
              onChange={handleCheck}
              classNameLabel={css.dropDown_label}
              className={css.dropDown_checkbox}
            />
          </li>
          <li>
            <CustomCheckBox
              checked={fiterUsers}
              {...fields.follow}
              onChange={handleCheck}
              classNameLabel={css.dropDown_label}
              className={css.dropDown_checkbox}
            />
          </li>
          <li>
            <CustomCheckBox
              checked={fiterUsers}
              {...fields.followings}
              onChange={handleCheck}
              classNameLabel={css.dropDown_label}
              className={css.dropDown_checkbox}
            />
          </li>
        </ul>
      </div>
      <CustomBtn
        text={"filter"}
        onClick={toggleOpen}
        className={css.dropDown_btn}
      />
    </>
  );
};

export default DropDown;
