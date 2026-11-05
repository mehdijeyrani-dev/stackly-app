import { useNavigate } from "react-router";
import { Bell } from "lucide-react";
import Button from "@/components/ui/Button";

const NotificationToggle = () => {
  const navigate = useNavigate();
  const notificationCount = 1;

  return (
    <Button
      variant="outline"
      color="secondary"
      className="size-6 md:size-8 rounded-md p-0 [&_svg]:size-4 md:[&_svg]:size-5"
      onClick={() => navigate("/notifications")}
      aria-label={`Notifications, ${notificationCount} unread`}
    >
      <Bell strokeWidth={1} />
      {notificationCount > 0 && (
        <div className="absolute top-0.75 md:top-1.25 right-1.25 md:right-2 size-1.5 md:size-2 bg-rose-500 rounded-full" />
      )}
    </Button>
  );
};

export default NotificationToggle;
