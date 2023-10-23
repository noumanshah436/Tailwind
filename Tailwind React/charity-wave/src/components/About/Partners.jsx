import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurPartners = () => {
  const partners_list = [
    {
      id: 1,
      name: "Adam Johnson, Homebuyer",
      image: Client1,
      about_us: "Working with this charity agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily."
    },
    {
      id: 2,
      name: "Michael Smith, Home Seller",
      image: Client4,
      about_us:
        "I was deeply impressed by this charity app's outreach efforts. They went the extra mile to raise awareness and engage supporters, effectively advancing our noble cause",
    },
    {
      id: 3,
      name: "Adam Johnson, Homebuyer",
      image: Client5,
      about_us:
        "Working with Charity wave has been a truly inspiring experience. Their team's unwavering dedication and shared commitment have played a pivotal role in our success.",
    },
  ];

  return (
    <div id="partners" className="w-full p-2 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our partners have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {partners_list.map((partner) => {
            return (
              <div key={partner.id} className="animate-fade-in-down justify-center w-full">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src={partner.image}
                  alt="Client 1"
                />
                <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 mb-4">
                    {partner.about_us}
                  </p>
                  <p className="text-gray-500">{partner.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
