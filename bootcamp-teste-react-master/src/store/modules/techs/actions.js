export function addTech(tech) {
  return {
    type: 'ADD_TECH',
    payload: { tech }
  }
}

export function getTechsSucess(data) {
  return {
    type: 'GET_TECHS_SUCCESS',
    payload: { data }
  }
}

export function getTechsFailure() {
  return {
    type: 'GET_TECHS_FAILURE',
  }
}