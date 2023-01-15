import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const NewsAllData = ({ data }) => {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
    data;
  return (
    <Card className="w-96 p-2" key={_id}>
      <CardHeader floated={false} color="blue" className="relative h-56">
        <img src={newsPreviewImage} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography>{newsDescription.slice(0, 120)}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography className="capitalize" variant="small">
          <span className="font-semibold">Category:</span>{" "}
          <span>{newsCategory}</span>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default NewsAllData;
