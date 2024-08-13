import { Button } from "antd";
import Container from "../commons/Container";

const Introduction = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-wrap gap-5">
          <div className="w-full md:w-5/12">
            <p>Who we are</p>
            <h2 className="text-4xl">
              Asian Agri is a palm oil company that places smallholder
              partnerships at the heart of its day-to-day operations.
            </h2>
          </div>
          <div className="w-full md:flex-1">
            <div>
              <p className="mb-2">
                Asian Agri is one of the leading private companies in Indonesia,
                producing crude palm oil through sustainably-managed
                plantations.
              </p>
              <p className="mb-2">
                Established in 1979, Asian Agri has grown to become one of the
                largest oil palm companies in Asia, managing 100,000 hectares of
                oil palm plantations in North Sumatra, Riau and Jambi, supported
                by a team of more than 22,000 employees.
              </p>
              <p className="mb-2">
                We plant, grow and process oil palms to produce sustainable
                crude palm oil and crude palm kernel oil in technologically
                advanced and energy self-sufficient mills.
              </p>
            </div>
            <Button type="primary">About us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
