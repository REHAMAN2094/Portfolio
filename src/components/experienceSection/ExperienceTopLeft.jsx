import ExperienceInfo from "./ExperienceInfo";

const EducationTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="1" text="Degree" />
      </div>
      <p className="text-center">
        With 3 years of academic progress in the field of Information Technology.
      </p>
      <ExperienceInfo number="8.0 CGPA" text="Current CGPA" />
    </div>
  );
};

export default EducationTopLeft;
