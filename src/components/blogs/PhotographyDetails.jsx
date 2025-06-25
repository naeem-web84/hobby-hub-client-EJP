import React from 'react';

const PhotographyDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Creative Photography Hacks</h1>
      <p className="text-lg mb-6">
        Whether you're using a DSLR or a smartphone, these hacks can elevate your photography:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Use natural light to your advantage—golden hour is best.</li>
        <li>Create depth using foreground and background elements.</li>
        <li>Use household items like a plastic bag for dreamy filters.</li>
        <li>Edit with tools like Lightroom or Snapseed for polish.</li>
      </ul>
      <p className="text-gray-600">
        Experiment often. Photography is about perspective—find your own and showcase the world through your lens.
      </p>
    </div>
  );
};

export default PhotographyDetails;
