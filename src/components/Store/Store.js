import { createStore } from "redux";

/**
 * States to manage different elements of the website
 * Each states is created to focus the website page sessions
 */
const initialState = {
  isSoftSkillsFocused: false,
  isSkillsFocused: false,
  isFormationFocused: false,
  isProjectsFocused: false,
  isHobbiesFocused: false,
  isContactFocused: false,
};

/**
 * Actions 
 */

/**
 * Actions to focus a page section
*/
export const homeFocused = () => ({ type: "homeFocused" });
export const softSkillsFocused = () => ({ type: "softSkillsFocused" });
export const skillsFocused = () => ({ type: "skillsFocused" });
export const formationFocused = () => ({ type: "formationFocused" });
export const projectsFocused = () => ({ type: "projectsFocused" });
export const hobbiesFocused = () => ({ type: "hobbiesFocused" });
export const contactFocused = () => ({ type: "contactFocused" });

function reducer(state = initialState, action) {
  if (action.type === "homeFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: false,
      isFormationFocused: false,
      isProjectsFocused: false,
      isHobbiesFocused: false,
      isContactFocused: false,
    };
  }
  if (action.type === "softSkillsFocused") {
    return {
      ...state,
      isSoftSkillsFocused: true,
      isSkillsFocused: false,
      isFormationFocused: false,
      isProjectsFocused: false,
      isHobbiesFocused: false,
      isContactFocused: false,
    };
  }
  if (action.type === "skillsFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: true,
      isFormationFocused: false,
      isProjectsFocused: false,
      isHobbiesFocused: false,
      isContactFocused: false,
    };
  }
  if (action.type === "formationFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: false,
      isFormationFocused: true,
      isProjectsFocused: false,
      isHobbiesFocused: false,
      isContactFocused: false,
    };
  }
  if (action.type === "projectsFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: false,
      isFormationFocused: false,
      isProjectsFocused: true,
      isHobbiesFocused: false,
      isContactFocused: false,
    };
  }
  if (action.type === "hobbiesFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: false,
      isFormationFocused: false,
      isProjectsFocused: false,
      isHobbiesFocused: true,
      isContactFocused: false,
    };
  }
  if (action.type === "contactFocused") {
    return {
      ...state,
      isSoftSkillsFocused: false,
      isSkillsFocused: false,
      isFormationFocused: false,
      isProjectsFocused: false,
      isHobbiesFocused: false,
      isContactFocused: true,
    };
  }
  return state;
}

export const store = createStore(reducer);