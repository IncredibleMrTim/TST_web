import { Icon } from "@timsmarttechnology/components";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col p-10">
      <Icon
        className="text-tst-primary-red opacity-75 w-24 h-24"
        icon="ExclamationTriangleIcon"
      />
      <h1 className="mt-10 font-bold text-2xl">Page not found</h1>
      <p>The page you are looking for is not available</p>
      <Button onClick={() => navigate("/")} placeholder={undefined}>
        Return to Home Page
      </Button>
    </div>
  );
};
