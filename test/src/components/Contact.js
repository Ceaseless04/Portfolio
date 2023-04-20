import ContactPfp from "../Images/Contact_pfp.png";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import { FaLinkedinIn, FaGithub, FaFilePdf } from 'react-icons/fa';
import { My_Doc } from '../Documents/Vazquez_Kristian_Resume.pdf';

// variables for links
const linkedIn = "https://www.linkedin.com/in/kristian-vazquez-0329b4244/";
const gitHub = "https://github.com/Ceaseless04";

export default function Contact() {
    return (

        <div className="flex justify-center" id="contact">
          <Card className="w-96 bg-red-100">
            <CardHeader floated={false} className="h-96">
              <img src={ContactPfp} alt="profile-pic"/>
            </CardHeader>

            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Kristian Vazquez
              </Typography>

              <Typography color="gray" className="font-medium" textGradient>
                Software Engineer
              </Typography>
            </CardBody>

            <CardFooter className="flex justify-center gap-2">
              <Tooltip content="Follow">
                <Typography as="a" href={linkedIn}>
                  <FaLinkedinIn color="#F87171" variant="lead" textGradient size={28}/>
                </Typography>
              </Tooltip>

              <Tooltip content="Follow">
                <Typography as="a" href={gitHub}>
                  <FaGithub color="#F87171" variant="lead" textGradient size={28}/>
                </Typography>
              </Tooltip>

              <Tooltip content="Download">
                <Typography href={My_Doc} download>
                  <FaFilePdf color="#F87171" variant="lead" textGradient size={28}/>
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        </div>
    );
}