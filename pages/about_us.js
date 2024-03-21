import Frontend from "@/components/Frontend";
import Image from "next/image";
const about_us = ({authName,handleLogOff}) => {
  return (
    <>
      <Frontend title={"About us."} authName={authName} handleLogOff={handleLogOff}>
        <div className="container py-5">
          <h1>Listing Next</h1>
          <p>
            <Image src="/img/cat-tool-bg-5.jpg" width={1220} height={400} alt="ss" />
          </p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
          </p>
          <h3>Another Title</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
         
          </p>
        </div>
      </Frontend>
    </>
  );
};

export default about_us;
