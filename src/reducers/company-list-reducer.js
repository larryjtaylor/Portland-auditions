const companyList = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      const { name, location, description, url, image, id } = action;
      return [
        ...state,
        {
          name : name,
          location : location,
          description : description,
          url : url,
          image: image,
          id : id
        }
      ];
    case "CLOSE_COMPANY":
      const updatedCompanyList = state.filter(company => company.id !== action.companyId);
      return updatedCompanyList;
    default:
      return state;
  }
};

export default companyList;
