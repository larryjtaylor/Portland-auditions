export default (state = [], action) => {
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

    default:
      return state;
  }
};
