import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://i.ibb.co/KjyzTy8/i-XUvu-Fh-BSLC6-TTBrvxd-RRg.png"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
             German University Bangladesh
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="gray" className="font-semibold text-gray-600">
              Computer Science and Engineering
              <br />
              Bachelor of Engineering - BE, <br /> 2019 - 2022
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            {/* <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://yt3.googleusercontent.com/ytc/AGIKgqPH81zkbo4ZGDvdP3jgPo56PgO9-tJq-B6mGPanEA=s900-c-k-c0x00ffffff-no-rj"
                alt="user 2"
              />
            </TimelineIcon> */}
            {/* <Typography variant="h5" color="blue-gray">
              Bihar State Education Board
            </Typography> */}
          </TimelineHeader>
          <TimelineBody className="pb-8">
            {/* <Typography color="gray" className="font-semibold text-gray-600">
              Higher Secondary School, Science <br /> 2018 - 2020
            </Typography> */}
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
