import companyList from "./../../src/reducers/company-list-reducer";
import c from "./../../src/constants";

describe("Company list reducer", () => {
  let action;
  const companyInfo = {
    name: "Broadway Rose Theater Co.",
    location: "Tigard, OR",
    description: "Broadway Rose Theatre Company is Oregon’s premier musical theatre company. Under the artistic direction of Sharon Maroney, Broadway Rose has been producing professional musical theatre in the Portland area since 1992 and has earned national recognition for its commitment to artistic excellence and new work development.\n Working to enrich the region’s cultural life and increase opportunities for Oregonians to participate in the arts, the company presents a variety of mainstage productions throughout the year as well as summer children’s musicals, educational camps for children and teens, and a technical internship program for developing theatre professionals. Average annual attendance at Broadway Rose exceeds 45,000 visits a year. Broadway Rose is a 501(c)3 nonprofit committed to keeping live theatre affordable and making its productions accessible to all members of the community.",
    url: "http://www.broadwayrose.org/",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/30/6f/31/broadway-rose-new-stage.jpg",
    id: 0
  };

  test("should return equivalent state if no action type is recognized", () => {
    expect(companyList([], { type: null })).toEqual([]);
  });

  test("should add company to list array", () => {
    const { name, location, description, url, image, id } = companyInfo;
    action = {
      type: c.ADD_TICKET,
      name: name,
      location: location,
      description: description,
      url: url,
      image: image,
      id: id
    };
    const futureState = [ companyInfo ];
    expect(companyList([], action)).toEqual([ companyInfo ]);
  });

});
